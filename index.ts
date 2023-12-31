import * as path from "path";
import {
  Extractor,
  ExtractorConfig,
  ExtractorResult,
} from "@microsoft/api-extractor";

const apiExtractorJsonPath: string = path.join(
  __dirname,
  "./config/api-extractor.json"
);

// Load and parse the api-extractor.json file
const extractorConfig: ExtractorConfig =
  ExtractorConfig.loadFileAndPrepare(apiExtractorJsonPath);
console.log(`extractorConfig: `, extractorConfig);

// Invoke API Extractor
const extractorResult: ExtractorResult = Extractor.invoke(extractorConfig, {
  // Equivalent to the "--local" command-line parameter
  localBuild: true,

  // Equivalent to the "--verbose" command-line parameter
  showVerboseMessages: true,
});

if (extractorResult.succeeded) {
  console.log(`API Extractor completed successfully`);
  process.exit(0);
} else {
  console.error(
    `API Extractor completed with ${extractorResult.errorCount} errors` +
      ` and ${extractorResult.warningCount} warnings`
  );
  process.exit(1);
}
