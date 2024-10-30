export function AddSecret(secret) {
  if(!secret){
    secret = ""
  }
  global['dycloud-secret'] = secret;
}
