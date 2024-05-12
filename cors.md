**CORS: Cross Origin Resource Sharing- Specific webpapp shares resources to another web app, if they have different origin, they need to follow CORS origin** 

if shwethaas.in trying to access google.com/api/getdata - this was not allowed, not from diff domain
shwethaas.in trying to call subdomain -> api.shwethaas.in 
diff ports shwethaas.in:5050
diff protocols http:shwethaas.in not allowed

After CORS became standard, browser allows accessing data from different domain/servers/ports etc

1. How resource sharing between 2 domains work?

--> origin 1 webapp A wants somedata from Origin 2 webapp B

(preflight options calls)
  
A -----------------> B
    (post data)


Browser creates a preflight options calls to server B(B Verifies if call valid), then server B sends a additional HTTP headers, then the post can be made from A to B.

HTTP Headers are Accept-Control-Allow-Origin: *

Access-Control-Allow-Methods: (GET/PUT/POST/DELETE)

Does all request made from A to B, for all request preflight req made?

NO, one is simple request, one if preflight request.

To bypass start chrome with flag as DISABLE_WEB_SECURITY or in Chrome enable plugin filter CORS.

Certainly! Let's explore **Cross-Origin Resource Sharing (CORS)**, its purpose, and how it works:

1. **What Is CORS?**
   - **CORS** (Cross-Origin Resource Sharing) is an HTTP-header based mechanism that allows a server to indicate which origins (domains, schemes, or ports) other than its own are permitted to load resources.
   - It enables secure cross-origin requests and data transfers between browsers and servers.

2. **How CORS Works**:
   - When a web page makes a cross-origin HTTP request (e.g., using `fetch()` or `XMLHttpRequest`), the browser checks if the response includes the necessary CORS headers.
   - CORS relies on a **preflight** mechanism:
     - Before making the actual request, the browser sends a preflight request (an HTTP OPTIONS request) to the server.
     - The preflight request includes headers indicating the HTTP method and other headers that will be used in the actual request.
     - The server responds with CORS headers indicating whether the actual request is permitted.
   - If the server approves, the browser proceeds with the actual request; otherwise, it blocks the request due to security restrictions.

3. **Scenarios Where CORS Is Used**:
   - **Invocations of `fetch()` or `XMLHttpRequest`**:
     - Browsers restrict cross-origin requests initiated from scripts.
     - CORS headers in the response allow cross-origin requests.
   - **Web Fonts**:
     - CORS enables cross-domain font usage in `@font-face` within CSS.
     - Servers can deploy TrueType fonts that can only be loaded cross-origin.
   - **WebGL Textures**:
     - CORS allows loading textures for WebGL from different origins.
   - **Images/Video Frames Drawn to Canvas**:
     - CORS headers permit drawing images or video frames to a canvas using `drawImage()`.
   - **CSS Shapes from Images**:
     - CORS headers enable using images for CSS shapes.

4. **Functional Overview**:
   - CORS adds new HTTP headers to describe which origins are allowed to read data from a web browser.
   - For methods that can cause side-effects (e.g., non-GET requests), browsers preflight the request to check server support.
   - CORS failures result in errors, but specifics are not available to JavaScript for security reasons.

5. **Conclusion**:
   - Understanding CORS is essential for secure cross-origin communication.
   - It ensures that browsers and servers cooperate to handle cross-origin requests effectively.
   

For more detailed information, you can refer to the [MDN Web Docs on CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS?ref=skiplevel-newsletter.ghost.io). 😊
[1](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS?ref=skiplevel-newsletter.ghost.io)

Source: Conversation with Bing, 5/11/2024
(1) Cross-Origin Resource Sharing (CORS) - HTTP | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS?ref=skiplevel-newsletter.ghost.io.
(2) CORS - MDN Web Docs Glossary: Definitions of Web-related terms | MDN. https://developer.mozilla.org/en-US/docs/Glossary/CORS.
(3) HTML: HyperText Markup Language | MDN - MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin.
(4) CORS - Glossary | MDN. http://devdoc.net/web/developer.mozilla.org/en-US/docs/Glossary/CORS.html.
(5) undefined. https://domain-a.com.
(6) undefined. https://domain-b.com/data.json.

Certainly! The **same-origin policy (SOP)** is a critical security mechanism implemented by web browsers. It restricts how a document or script loaded from one origin (domain, protocol, and port combination) can interact with resources from another origin. Let's delve into the details:

1. **Purpose of Same-Origin Policy**:
   - The SOP aims to prevent unauthorized access to sensitive data and mitigate security risks.
   - It establishes boundaries between different origins, ensuring that scripts from one origin cannot freely interact with resources from another.

2. **How Same-Origin Policy Works**:
   - When a web page makes an HTTP request from one origin to another (e.g., using `fetch()` or `XMLHttpRequest`), the browser checks if the response includes the necessary CORS (Cross-Origin Resource Sharing) headers.
   - CORS headers indicate whether the actual request is permitted based on the origin of the requesting script.
   - If the server approves, the browser proceeds with the actual request; otherwise, it blocks the request due to security restrictions.

3. **Examples of Same-Origin Policy Impact**:
   - **Preventing Unauthorized Data Access**:
     - Without the SOP, visiting a malicious website could allow it to read sensitive data from other origins (e.g., emails from Gmail, private messages from Facebook).
   - **Mitigating XSS (Cross-Site Scripting) Attacks**:
     - SOP helps isolate potentially malicious documents, reducing attack vectors.
     - It prevents scripts from injecting harmful content into other origins.
   - **Addressing CSRF (Cross-Site Request Forgery) Vulnerabilities**:
     - SOP ensures that requests made by one origin (e.g., via a form submission) cannot manipulate resources on another origin without proper authorization.

4. **Exceptions and Limitations**:
   - While SOP restricts cross-origin access, there are exceptions:
     - Some objects are writable but not readable cross-domain (e.g., the `location` object).
     - Certain functions can be called cross-domain (e.g., `close`, `blur`, `focus` on new windows).
     - The `replace` function can generally be called on the `location` object.
   - Internet Explorer (IE) behaves differently and allows cross-origin access based on port numbers.

In summary, the same-origin policy plays a crucial role in web security by enforcing boundaries between origins, preventing unauthorized data access, and reducing attack surfaces. 😊

For more detailed information, you can refer to the [MDN Web Docs on Same-Origin Policy](https://developer.mozilla.org/docs/Web/Security/Same-origin_policy).²³

Source: Conversation with Bing, 5/11/2024
(1) Same-origin policy - Security on the web | MDN - MDN Web Docs. https://developer.mozilla.org/docs/Web/Security/Same-origin_policy.
(2) How does the same-origin policy contribute to web security?. https://eitca.org/cybersecurity/eitc-is-wasf-web-applications-security-fundamentals/introduction-eitc-is-wasf-web-applications-security-fundamentals/introduction-to-web-security-html-and-javascript-review/examination-review-introduction-to-web-security-html-and-javascript-review/how-does-the-same-origin-policy-contribute-to-web-security/.
(3) Same-origin policy (SOP) | Web Security Academy - PortSwigger. https://portswigger.net/web-security/cors/same-origin-policy.
(4) Understanding CORS and Same Origin Policy in Web Security. https://valentsea.com/media/understanding-cors-and-same-origin-policy-in-websecurity/.
(5) undefined. http://normal-website.com/example/example.html.
(6) undefined. http://normal-website.com/example/.
(7) undefined. http://normal-website.com/example2/.
(8) undefined. https://normal-website.com/example/.
(9) undefined. http://en.normal-website.com/example/.
(10) undefined. http://www.normal-website.com/example/.
(11) undefined. http://normal-website.com:8080/example/.