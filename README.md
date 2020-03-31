# API

## envs

Need to create a `api/env.json` file with keys and replace with your data:

```json
{
  "MONGO_DATABASE_URL": "mongodb+srv://example:12*ksjd1333@cluster0-9dskj2.mongodb.net/teste?retryWrites=true&w=majority",
  "MONGO_DATABASE_NAME": "free-stack",

  "JWT_TOKEN": "FREESTACKJWTTOKENDEVELOPMENT",

  "CRYPTO_CLIENT_SECRET": "FIRSTLAYERENCRYP7",
  "CRYPTO_DB_SECRET": "SECONDLAYERENCRYPT7"
}
```

### Using `git-secret`

- Install with brew: `brew install git-secret`
- Init with: `git-secret init`
- Add user: `git secret tell user@email.com`
- Hide file: `git secret hide file.exe`
- Recover files: `git secret reveal`
