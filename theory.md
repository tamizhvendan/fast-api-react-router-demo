## SPA vs MPA

```
SPA
  => /vendors => /customers
    => Backend 
      => Render Index HTML Page
      => Logic => Data Provider => /api/*
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

## SPA Framework Options

React 
  => Library
  => Framework
    -> Next.js (Vercel)
    -> React Router (Remix)
Vue
  => Library
  => Framework
    -> Nuxt.js
    -> ..
AngularJS
  => Library & Framework 
Svelete

------
Hot Module Replacement (HMR)
-----


## Serving the Frontend assets

* Plain Files
  * Supports only single file (index.html)
* Dev Server
  * Faster Feedback Loop 
  * Can't be used in production 
* Production Server to serve the frontend assets 
  * Existing Backend
    * Simple Model
    * API & Static File 
  * CDN (Content Delivery Network) => Static Files 
    * AWS Cloudflare
    * Vercel
    * Cloudinary
    * Netlify
    * ...  

## Deploying the Frontend

### Option #1
* Build
  * Local
* Serving
  * Configure a bucket in CDN 
  * Manually Upload build files to the bucket 

### Option #2
* Configure CI & CD Pipeline
  * On Git Push (or any other trigger)
    * Build & Push (Upload) to configured CDN
* Serving
 
Reducing the complexity, Achieving the outcome. 

Backend Routing Logic
"/api/*" => Handle Logic
"/*" => Render HTML page


CORS => 


milkman

api.milkman.com => backend server
app.milkman.com => frontend run (CDN)