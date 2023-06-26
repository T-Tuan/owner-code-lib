import { ApiModel } from '@microsoft/api-extractor-model';

const apiModel: ApiModel = new ApiModel();

const apiPackage = apiModel.loadPackage('./docs/owner-code-lib.api.json');
console.log(`apiPackage: `, apiPackage);

for (const member of apiPackage.members) {
  console.log(`member: `, member.kind);
  // console.log(`member: `, member);
  if (member.kind === 'Class') {
    console.log(`Class: ${member.displayName}`);
  } else if (member.kind === 'Method') {
    console.log(`Method: ${member.displayName}`);
  }
}
