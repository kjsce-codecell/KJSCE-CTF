# Blueprint 

**Description**: Oh, Batman, seeking hints? How utterly pathetic!

**Files**: [ctf.apk](./files/ctf.apk)

## Solution

Decompile the apk file.

<figure><img src="./imgs/decompile.png"></figure>

On reading the `AndroidManifest.xml`, the flag was found.

<figure><img src="./imgs/flag.png"></figure>

## Flag
```
KJSCE_CTF{d3C0mp1l1ng_i5_ez}
```