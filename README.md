# Shinwoo's Personal Website

This repository contains my personal website, which is live at https://people.cs.pitt.edu/~shk148/.

## About the site

This website is built with a static site generator written in Ruby called [Jekyll](https://jekyllrb.com/). The theme was created using [Bootstrap 5.3](https://getbootstrap.com/), a free and open-source CSS framework.

On each commit, the site is (re)built on [GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions) which publishes the final artifacts to the [web](https://shinwookim.github.io) using GitHub pages. Previously, the website was served by a Unix machine running an Apache server that was maintained by the CS department at the University of Pittsburgh.

### Teaching Site

This build action also builds my [teaching website](https://shinwookim.github.io/teaching) and incorporates it into the final artifact. The code for that website can be found in the [`shinwookim/teaching` repository](https://github.com/shinwookim/teaching).
