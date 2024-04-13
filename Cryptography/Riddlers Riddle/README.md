# Riddlers Riddle

**Description**: Decrypt the enigma concealed within the text.

**Link**: [enigma-ctf.kjsce.com](http://enigma-ctf.kjsce.com/)

## Solution

We get this text as we open the link.

<figure><img src="./imgs/text.png"></figure>

Decrypting with `Vigenère cipher`.

<figure><img src="./imgs/decode.png"></figure>

Going to `/robots.txt` and scrolling down, we get another endpoint which leads to `/secrets.html` and we get the flag.

<figure><img src="./imgs/flag.png"></figure>

## Flag
```
KJSCE_CTF{V1g3nR3_C1p5eR_i5_3ZYYY!}
```