# Use Status enum rather than boolean

[Stop using isLoading booleans - Kent C. Dodds](https://kentcdodds.com/blog/stop-using-isloading-booleans)

Good:
```tsx
enum Status {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const [status, setStatus] = useState<Status>(Status.IDLE);

useEffect(() => {
  setStatus(Status.LOADING);
  fetchData()
    .then(() => setStatus(Status.SUCCESS))
    .catch(() => setStatus(Status.ERROR));
}, []);
```

Bad:
```tsx
const [isLoading, setIsLoading] = useState<boolean>(false);

useEffect(() => {
  setIsLoading(true);
  fetchData()
    .then(() => setIsLoading(false))
    .catch(() => setIsLoading(false));
}, []);
```