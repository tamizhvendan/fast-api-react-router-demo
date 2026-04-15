## SPA vs MPA

```
SPA
  => /vendors => /customers
    => Backend 
      => Render Index HTML Page
      => Data Provider => /api/*
    => FrontEnd 
      => Router 
        => Router => Component Load 
          => Component Fetches the data from the backend 
          => Render using its template Engine (JSX/TSX) 
MPA 
  => /vendors
        => Backend 
            => Router 
                => Logic
                => Template Engine (Jinga) => HTML
        => FrontEnd
          => Render The HTML (Take care by the Browser)
  => /customers
```