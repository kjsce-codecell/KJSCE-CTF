# Madhatter Secrets

**Description**: Listen closely, Batman. Can you unveil the secret of the Madhatter?

**File**: [Users.zip](./files/Users.zip)

## Solution

On Unzipping the file, we find a `flag.txt` but it doesn't get accepted. It's a fake flag.

<figure><img src="./imgs/fake.png"></figure>

To unzip `secret.zip` I need a password. Let's try to bruteforce the hash of the file.

<figure><img src="./imgs/password.png"></figure>

We can unzip the file using the password `passw0rd` to find the flag.

<figure><img src="./imgs/flag.png"></figure>

## Flag
```
KJSCE_CTF{Th3_M4dh@tt3r}
```