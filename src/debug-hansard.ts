import { spawn } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { setTimeout } from 'timers/promises';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

async function debugMcpServer() {
  console.log('Starting MCP server debug test...');

  // Start the MCP server as a child process
  const serverProcess = spawn('node', [resolve(projectRoot, 'dist/index.js')], {
    stdio: ['pipe', 'pipe', 'pipe'],
  });

  // Give the server some time to start up
  await setTimeout(1000);

  serverProcess.stdout.on('data', data => {
    console.log(`Server stdout: ${data}`);
  });

  serverProcess.stderr.on('data', data => {
    console.error(`Server stderr: ${data}`);
  });

  // Helper function to send requests to the server
  async function sendRequest(method: string, params = {}) {
    const request = {
      jsonrpc: '2.0',
      id: Math.floor(Math.random() * 10000),
      method,
      params,
    };

    console.log(`Sending request: ${JSON.stringify(request, null, 2)}`);
    serverProcess.stdin.write(JSON.stringify(request) + '\n');

    // Wait for response
    return new Promise(resolve => {
      const responseHandler = (data: any) => {
        try {
          const responseStr = data.toString();
          console.log(`Raw response: ${responseStr}`);
          const response = JSON.parse(responseStr);
          if (response.id === request.id) {
            serverProcess.stdout.removeListener('data', responseHandler);
            resolve(response);
          }
        } catch (error) {
          console.error('Error parsing response:', error);
        }
      };

      serverProcess.stdout.on('data', responseHandler);
    });
  }

  try {
    // Test 1: Basic hansard_search
    console.log('\n=== Testing hansard_search ===');
    const hansardSearchResult = await sendRequest('hansard_search', {
      words: ['climate', 'change'],
      house: 'Commons',
      take: 5,
    });
    console.log('hansard_search result:', JSON.stringify(hansardSearchResult, null, 2));

    // Test 2: Search by member with hansard_search
    console.log('\n=== Testing hansard_search with spokenBy ===');
    const memberSearchResult = await sendRequest('hansard_search', {
      spokenBy: 'Rishi Sunak',
      take: 5,
    });
    console.log('Member search result:', JSON.stringify(memberSearchResult, null, 2));

    // Test 3: Searching contributions
    console.log('\n=== Testing hansard_contributions_search ===');
    const contributionsResult = await sendRequest('hansard_contributions_search', {
      contributionType: 'Spoken',
      searchTerm: 'climate change',
      house: 'Commons',
      take: 5,
    });
    console.log('Contributions search result:', JSON.stringify(contributionsResult, null, 2));

    console.log('\nAll tests completed successfully.');
  } catch (error) {
    console.error('Error during tests:', error);
  } finally {
    // Cleanup
    console.log('Stopping MCP server...');
    serverProcess.kill();
  }
}

// Run the debug function
debugMcpServer().catch(console.error);
