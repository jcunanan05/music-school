FROM jekyll/jekyll

WORKDIR /home/app

ENV PORT 4000

ENTRYPOINT [ "/bin/bash" ]
