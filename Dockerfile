FROM ubuntu:latest
LABEL authors="Unknown"

ENTRYPOINT ["top", "-b"]
