# Deploying on `apf.nusrlranchi.ac.in`

This project is feasible to host on a NUSRL subdomain using the Vercel Hobby plan.
The recommended final URL is:

```text
https://apf.nusrlranchi.ac.in
```

The public website pages build successfully as static pages. The CMS/admin routes
(`/admin`, `/api/cms-auth`, and `/api/cms-callback`) require the normal Next.js
runtime, which Vercel provides on the Hobby plan.

## What can be done without vendor server access

You can complete these items yourself if you have access to this GitHub repository,
Vercel, and GitHub OAuth app settings:

1. Create/import the project in Vercel.
2. Add the custom domain `apf.nusrlranchi.ac.in` in Vercel.
3. Add the required environment variables in Vercel.
4. Configure GitHub OAuth for the CMS admin login.
5. Ask the vendor only for DNS and main-domain link changes.

No file upload or application deployment is required on the vendor server when
using Vercel. The vendor only needs to point the subdomain DNS record to Vercel.

## Vercel Hobby setup

1. Log in to Vercel.
2. Import this GitHub repository as a new Vercel project.
3. Use the default framework detection:
   - Framework: `Next.js`
   - Build command: `npm run build`
   - Install command: `npm install` or `npm ci`
   - Output directory: leave empty/default
4. In Vercel project settings, add this environment variable for Production:

   ```text
   NEXT_PUBLIC_SITE_URL=https://apf.nusrlranchi.ac.in
   ```

5. If the `/admin` CMS must be used, also add:

   ```text
   GITHUB_CLIENT_ID=<GitHub OAuth client ID>
   GITHUB_CLIENT_SECRET=<GitHub OAuth client secret>
   ```

6. Go to Vercel project settings -> Domains.
7. Add:

   ```text
   apf.nusrlranchi.ac.in
   ```

8. Vercel will show the required DNS record. For a subdomain, it is normally:

   ```text
   Type: CNAME
   Name/Host: apf
   Value/Target: cname.vercel-dns.com
   ```

9. Send the DNS details to the vendor.
10. After the vendor updates DNS, wait for Vercel to show the domain as valid.
11. Redeploy the Production deployment if needed.

## GitHub OAuth setup for `/admin`

The CMS login uses GitHub OAuth. In GitHub, create or update an OAuth App with:

```text
Application name:
NUSRL APF Website CMS

Homepage URL:
https://apf.nusrlranchi.ac.in

Authorization callback URL:
https://apf.nusrlranchi.ac.in/api/cms-callback
```

Then copy the generated client ID and client secret into Vercel:

```text
GITHUB_CLIENT_ID=<client ID>
GITHUB_CLIENT_SECRET=<client secret>
```

After deployment, test:

```text
https://apf.nusrlranchi.ac.in/admin
```

## Vendor/main-domain changes required

When using Vercel, the vendor does not need to host the application on their
server. They only need to update DNS for the subdomain and optionally add a link
from the main NUSRL website.

Required vendor changes:

1. Add DNS record:

   ```text
   Type: CNAME
   Host/Name: apf
   Target/Value: cname.vercel-dns.com
   TTL: Auto or 300 seconds
   ```

2. Ensure there is no existing conflicting DNS record for:

   ```text
   apf.nusrlranchi.ac.in
   ```

3. Do not redirect the subdomain to the main website. It must point directly to
   Vercel.
4. HTTPS/SSL will be issued by Vercel automatically after DNS is correct.
5. If the domain has restrictive CAA records and Vercel cannot issue SSL, allow
   certificate issuance for Vercel's certificate authority as shown in the Vercel
   domain error message.
6. Optional main website change: add a card/link on the NUSRL projects page:

   ```text
   Title: Undertrial Prisoners & Continuous Legal Education
   URL: https://apf.nusrlranchi.ac.in
   Description: Project website for legal aid, continuous legal education,
   prison outreach, publications, and activities related to undertrial prisoners.
   ```

## Email draft for vendor

Subject:

```text
Request to create subdomain DNS record for APF project website
```

Email body:

```text
Dear Team,

We are launching a project website for "Undertrial Prisoners & Continuous Legal
Education" and need it to open on the following NUSRL subdomain:

https://apf.nusrlranchi.ac.in

The website will be hosted on Vercel. No application files need to be uploaded
to the NUSRL server, and no Node.js setup is required on your server for this
deployment. We only need the DNS/subdomain configuration from your side.

Please create/update the following DNS record:

Type: CNAME
Host/Name: apf
Full domain: apf.nusrlranchi.ac.in
Target/Value: cname.vercel-dns.com
TTL: Auto or 300 seconds

Please also ensure:

1. There is no existing conflicting A, AAAA, or CNAME record for
   apf.nusrlranchi.ac.in.
2. The subdomain is not redirected to nusrlranchi.ac.in or any other page.
3. The CNAME points directly to Vercel.
4. HTTPS/SSL will be handled by Vercel automatically after DNS propagation.
5. If any CAA records prevent SSL issuance, please update them according to the
   certificate authority requirement shown by Vercel.

After the DNS change is completed, kindly confirm so that we can verify the
domain in Vercel.

Optional main website update:
Please add a link/card on the NUSRL projects page, if approved:

Title: Undertrial Prisoners & Continuous Legal Education
URL: https://apf.nusrlranchi.ac.in
Description: Project website for legal aid, continuous legal education, prison
outreach, publications, and activities related to undertrial prisoners.

Regards,
<Your Name>
```

## Post-DNS verification checklist

After the vendor confirms the DNS change:

1. Check Vercel project -> Domains. The domain should show as valid.
2. Open:

   ```text
   https://apf.nusrlranchi.ac.in
   ```

3. Check the public pages:

   ```text
   https://apf.nusrlranchi.ac.in/activities
   https://apf.nusrlranchi.ac.in/publications
   https://apf.nusrlranchi.ac.in/gallery
   https://apf.nusrlranchi.ac.in/robots.txt
   https://apf.nusrlranchi.ac.in/sitemap.xml
   ```

4. If CMS is configured, check:

   ```text
   https://apf.nusrlranchi.ac.in/admin
   ```

## Notes

- Vercel Hobby is sufficient for this technical setup.
- If the university requires enterprise support, SLA, team billing, or formal
  institutional ownership, that is an administrative decision and may require a
  paid Vercel plan later.
- For this repository, the important production environment value is:

  ```text
  NEXT_PUBLIC_SITE_URL=https://apf.nusrlranchi.ac.in
  ```
