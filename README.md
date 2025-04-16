# Hansard MCP Server

A Model Context Protocol (MCP) server for interacting with the UK Parliament Hansard API. This server provides a convenient interface to search and retrieve parliamentary debates, speeches, and contributions from both the House of Commons and House of Lords.

## About Hansard

Hansard is the official report of all parliamentary debates. It provides a complete record of what was said in both Houses of Parliament, including debates, written statements, corrections, and petitions. This MCP server interfaces with the [UK Parliament Hansard API](https://developer.parliament.uk/), making it easier to search and retrieve parliamentary content programmatically.

## Features

- TypeScript implementation with full type safety
- Two main search capabilities:
  - `hansard_search`: General search across all contribution types (Spoken, Written, Corrections, Petitions)
  - `hansard_contributions_search`: Detailed search within specific contribution types
- Built-in support for stdio transport
- Development tooling (ESLint, Prettier, Jest)
- TypeScript configuration
- Comprehensive filtering options:
  - By date range
  - By house (Commons/Lords)
  - By speaker
  - By debate title
  - By specific words
  - Pagination support

## Prerequisites

- Node.js >= 18
- npm >= 7

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/hansard-mcp.git
   cd hansard-mcp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the project:

   ```bash
   npm run build
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Usage

### Basic Search (`hansard_search`)

Search across all contribution types with a limit of 4 results per type:

```typescript
{
  spokenBy?: string;      // Filter by speaker name
  debate?: string;        // Filter by debate title
  words?: string[];       // Search for specific words
  take?: number;          // Maximum results (default: 4 per type)
  skip?: number;          // Pagination offset
  startDate?: string;     // ISO 8601 date
  endDate?: string;       // ISO 8601 date
  house?: 'Commons' | 'Lords';
}
```

### Detailed Search (`hansard_contributions_search`)

Search within a specific contribution type for complete results:

```typescript
{
  contributionType: 'Spoken' | 'Written' | 'Corrections' | 'Petitions';
  searchTerm?: string;    // Basic text search
  spokenBy?: string;      // Filter by speaker name
  debate?: string;        // Filter by debate title
  words?: string[];       // Search for specific words
  take?: number;          // Maximum results
  skip?: number;          // Pagination offset
  startDate?: string;     // ISO 8601 date
  endDate?: string;       // ISO 8601 date
  house?: 'Commons' | 'Lords';
}
```

## Example Usage

```typescript
// Search for recent speeches by a specific MP
const result = await hansard_search({
  spokenBy: 'Rishi Sunak',
  startDate: '2024-01-01',
  house: 'Commons',
});

// Search for all written statements about climate change
const contributions = await hansard_contributions_search({
  contributionType: 'Written',
  words: ['climate change'],
  take: 10,
});

// Search for debates about housing
const debates = await hansard_search({
  debate: 'housing',
  startDate: '2024-01-01',
  take: 5,
});
```

## Available Scripts

- `npm run build` - Build the TypeScript code
- `npm start` - Start the MCP server
- `npm run dev` - Start the server in development mode with ts-node
- `npm run debug` - Run the debug script
- `npm test` - Run tests with Jest
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run type-check:watch` - Run TypeScript type checking in watch mode
- `npm run generate:api` - Generate TypeScript types from the Hansard API OpenAPI spec

## Project Structure

```
hansard-mcp/
├── src/
│   ├── index.ts              # Main server implementation
│   ├── debug-hansard.ts      # Debug script
│   ├── services/             # API service implementations
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Utility functions
│   ├── __tests__/            # Test files
│   └── generated/            # Generated API types and services
├── dist/                     # Compiled JavaScript output
├── package.json              # Project dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tsconfig.dev.json        # Development TypeScript configuration
├── jest.config.js           # Jest configuration
├── eslint.config.js         # ESLint configuration
├── .prettierrc              # Prettier configuration
└── README.md                # This file
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [UK Parliament Hansard API](https://developer.parliament.uk/) - The underlying data source
- [Model Context Protocol](https://github.com/modelcontextprotocol) - The protocol this server implements
