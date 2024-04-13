# Robomatics 

**Description**: Behold the perplexity of web challenges detective! Where every click and keystroke reveals a tale of intrigue

**Link**: [robomatics-ctf.kjsce.com](https://robomatics-ctf.kjsce.com/)

## Solution

Opening up the link, the homepage looks like this.

<figure><img src="./imgs/home.png"></figure>

On viewing the source code, we find an interesting endpoint.

<figure><img src="./imgs/robot.png"></figure>

On visiting the `/robots` endpoint, we find another endpoint.

<figure><img src="./imgs/new.png"></figure>

Again, on visiting `/averylongandextremelyrandompagewhichhassecrets.html`, we find the flag in `white font`.

<figure><img src="./imgs/flag.png"></figure>

## Flag
```
KJSCE_CTF{h1DdEN_iN_pl4in_s15Ht}
```