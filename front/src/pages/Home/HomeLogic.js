import axios from "axios"

import useAsyncEffect from "hooks/useAsyncEffect"

async function useHomeLogic() {
  useAsyncEffect(async function() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImxiaXRhciIsImRlY3J5cHRlZFBhc3N3b3JkIjoidG9wc2hvd2JhIiwiZW5jcnlwdGVkUGFzc3dvcmQiOiJVMkZzZEdWa1gxK1o0MU5aeHZjMjNUdFB6MzRyWDdUeWpXNjdLNk1sMDZjPSIsImlhdCI6MTU4NTg4MTI5MCwiZXhwIjoxNTg1OTY3NjkwfQ.iacfxNAzWSvjS11DTwPBDdV6WHt6BfQjL8mwfZTWGxc"
    const { data } = await axios.post(
      "https://free-stack-api.now.sh/auth/tempEncryptPassword.ts",
      {
        password: "oba",
      }
    )
    const { data: decryptToken } = await axios.get(
      "https://free-stack-api.now.sh/auth/decryptToken.ts",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
    console.log({ data, decryptToken })
  })
}

export default useHomeLogic
