FROM golang:1.21.6

WORKDIR /app
COPY ../server/ .
RUN go mod download
RUN go build -o myapp .

CMD ["./server"]

