For Shopify

1. Install NodeJs (version 18 and above is recommended)

2. Place files and folders your local theme folder

3. Run "npm install"

4. Add the following in theme.liquid right above the closing </head> tag:
    4.1 <link href="{{ 'app.css' | asset_url }}" rel="stylesheet" type="text/css" media="all">
    4.2 <script src="{{ 'app.js' | asset_url }}" defer="defer"></script>

5. To compile resources, run "npm run build"