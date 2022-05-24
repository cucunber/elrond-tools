export class Err extends Error {
    inner: Error | undefined = undefined;

    public constructor(message: string, inner?: Error) {
        super(message);
        this.inner = inner;
    }
}

export class ErrNetworkProvider extends Err {
    public constructor(url: string, error: string, inner?: Error) {
        let message = `Request error on url [${url}]: [${error}]`;
        super(message, inner);
    }
}