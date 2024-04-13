# The Bat Computer

**Description**: It seems, detective, your Bat Computer is compromised.

Tick-tock, Batman, the database beckons, and your time is running out.

**Link**: [batcomputer-ctf.kjsce.com](https://batcomputer-ctf.kjsce.com)

## Solution

Opening up the link, we could only see an input section where we could search up the `User ID`.

<figure><img src="./imgs/page.png"></figure>

Now to read all the entries in the database, We did an SQL Injection with the most simplest query `1' OR '1'='1`.

<figure><img src="./imgs/flag.png"></figure>

## Flag
```
KJSCE_CTF{C0nt1ng3ncy_Pl@ns}
```