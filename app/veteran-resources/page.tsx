<section class="veteran-resources-directory enhanced-vrd" id="veteran-resources-directory">
  <style>
    .enhanced-vrd {
      --vrd-bg: #f5f7fb;
      --vrd-card: #ffffff;
      --vrd-text: #16202a;
      --vrd-muted: #5d6b7a;
      --vrd-border: #d9e1ea;
      --vrd-primary: #154c79;
      --vrd-primary-2: #0f3a5d;
      --vrd-accent: #e9f2fb;
      --vrd-success: #dff5e8;
      --vrd-shadow: 0 8px 24px rgba(18, 38, 63, 0.08);
      font-family: Arial, sans-serif;
      color: var(--vrd-text);
      background: var(--vrd-bg);
      padding: 16px;
      border-radius: 20px;
      line-height: 1.5;
    }

    .enhanced-vrd * {
      box-sizing: border-box;
    }

    .enhanced-vrd a {
      color: var(--vrd-primary);
      word-break: break-word;
    }

    .enhanced-vrd a:hover {
      color: var(--vrd-primary-2);
    }

    .vrd-header {
      margin-bottom: 14px;
    }

    .vrd-title {
      margin: 0 0 8px;
      font-size: clamp(24px, 4vw, 34px);
      line-height: 1.15;
    }

    .vrd-subtitle {
      margin: 0;
      color: var(--vrd-muted);
      font-size: 15px;
    }

    .vrd-toolbar {
      position: sticky;
      top: 8px;
      z-index: 20;
      background: rgba(245, 247, 251, 0.95);
      backdrop-filter: blur(8px);
      border: 1px solid var(--vrd-border);
      box-shadow: var(--vrd-shadow);
      border-radius: 18px;
      padding: 12px;
      margin: 16px 0 18px;
    }

    .vrd-search-row {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 10px;
    }

    .vrd-search {
      width: 100%;
      padding: 14px 16px;
      font-size: 16px;
      border: 1px solid var(--vrd-border);
      border-radius: 14px;
      background: #fff;
      outline: none;
    }

    .vrd-search:focus {
      border-color: var(--vrd-primary);
      box-shadow: 0 0 0 3px rgba(21, 76, 121, 0.15);
    }

    .vrd-filters,
    .vrd-actions,
    .vrd-jump-links {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .vrd-chip,
    .vrd-action-btn,
    .vrd-jump-link {
      appearance: none;
      border: 1px solid var(--vrd-border);
      background: #fff;
      color: var(--vrd-text);
      border-radius: 999px;
      padding: 10px 14px;
      font-size: 14px;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      min-height: 40px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .vrd-chip.active,
    .vrd-action-btn:hover,
    .vrd-jump-link:hover {
      background: var(--vrd-accent);
      border-color: #bfd3e7;
    }

    .vrd-chip.active {
      background: var(--vrd-primary);
      color: #fff;
      border-color: var(--vrd-primary);
    }

    .vrd-status {
      margin-top: 10px;
      color: var(--vrd-muted);
      font-size: 14px;
    }

    .vrd-jump-wrap {
      margin: 14px 0 18px;
    }

    .vrd-jump-title {
      margin: 0 0 8px;
      font-size: 14px;
      color: var(--vrd-muted);
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }

    .vrd-groups {
      display: grid;
      gap: 14px;
    }

    .enhanced-vrd .group {
      margin: 0;
      border: 1px solid var(--vrd-border);
      border-radius: 18px;
      background: var(--vrd-card);
      box-shadow: var(--vrd-shadow);
      overflow: hidden;
    }

    .vrd-group-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      width: 100%;
      padding: 16px;
      border: 0;
      background: transparent;
      text-align: left;
      cursor: pointer;
    }

    .vrd-group-header:hover {
      background: #fafcff;
    }

    .vrd-group-title-wrap {
      min-width: 0;
    }

    .enhanced-vrd .group h2,
    .vrd-group-title {
      margin: 0;
      font-size: clamp(18px, 2.5vw, 24px);
      line-height: 1.2;
    }

    .vrd-group-count {
      margin-top: 4px;
      color: var(--vrd-muted);
      font-size: 13px;
    }

    .vrd-caret {
      flex: 0 0 auto;
      width: 14px;
      height: 14px;
      border-right: 2px solid var(--vrd-primary);
      border-bottom: 2px solid var(--vrd-primary);
      transform: rotate(45deg);
      transition: transform 0.2s ease;
      margin-right: 6px;
    }

    .group.is-open .vrd-caret {
      transform: rotate(225deg);
      margin-top: 4px;
    }

    .vrd-group-body {
      padding: 0 16px 16px;
      border-top: 1px solid var(--vrd-border);
    }

    .vrd-subsection {
      border: 1px solid var(--vrd-border);
      border-radius: 16px;
      background: #fcfdff;
      margin-top: 14px;
      overflow: hidden;
    }

    .vrd-subsection-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      background: transparent;
      border: 0;
      padding: 14px 14px 12px;
      text-align: left;
      cursor: pointer;
    }

    .vrd-subsection-title {
      margin: 0;
      font-size: 16px;
    }

    .vrd-subsection-count {
      color: var(--vrd-muted);
      font-size: 13px;
      margin-top: 3px;
    }

    .vrd-subsection-body {
      padding: 0 14px 14px;
      border-top: 1px solid var(--vrd-border);
    }

    .enhanced-vrd h3 {
      margin: 0;
      font-size: 16px;
    }

    .enhanced-vrd ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .enhanced-vrd li {
      margin: 12px 0 0;
      padding: 14px;
      border: 1px solid var(--vrd-border);
      border-radius: 14px;
      background: #fff;
    }

    .enhanced-vrd li:first-child {
      margin-top: 0;
    }

    .vrd-item-title-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      align-items: center;
      margin-bottom: 6px;
    }

    .vrd-scope-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      padding: 6px 10px;
      border-radius: 999px;
      background: var(--vrd-accent);
      color: var(--vrd-primary-2);
      border: 1px solid #cfe0f1;
    }

    .enhanced-vrd .meta,
    .enhanced-vrd .note {
      display: block;
      margin-top: 6px;
      font-size: 14px;
    }

    .enhanced-vrd .note {
      color: var(--vrd-muted);
    }

    .vrd-item-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 10px;
    }

    .vrd-item-action {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 38px;
      padding: 8px 12px;
      border-radius: 10px;
      border: 1px solid var(--vrd-border);
      background: #f8fbff;
      text-decoration: none;
      font-size: 14px;
    }

    .vrd-hidden {
      display: none !important;
    }

    .vrd-empty {
      margin: 16px 0 0;
      padding: 18px;
      border: 1px dashed var(--vrd-border);
      border-radius: 16px;
      background: #fff;
      color: var(--vrd-muted);
      text-align: center;
    }

    @media (min-width: 768px) {
      .enhanced-vrd {
        padding: 22px;
      }

      .vrd-search-row {
        grid-template-columns: 1.5fr auto;
        align-items: center;
      }

      .vrd-toolbar {
        padding: 14px;
      }

      .vrd-group-header {
        padding: 18px 20px;
      }

      .vrd-group-body {
        padding: 0 20px 20px;
      }

      .vrd-subsection-header {
        padding: 16px;
      }

      .vrd-subsection-body {
        padding: 0 16px 16px;
      }

      .enhanced-vrd li {
        padding: 16px;
      }
    }
  </style>

  <div class="vrd-header">
    <h1 class="vrd-title">Veteran Resources Directory</h1>
    <p class="vrd-subtitle">
      London &amp; Laurel County, Kentucky. Search by keyword, then narrow by scope so people can find what they need faster.
    </p>
  </div>

  <div class="vrd-toolbar" aria-label="Directory search and filters">
    <div class="vrd-search-row">
      <input
        id="vrd-search"
        class="vrd-search"
        type="search"
        placeholder="Search benefits, housing, VA clinic, GI Bill, legal, phone, county..."
        aria-label="Search veteran resources"
      />
      <div class="vrd-actions">
        <button type="button" class="vrd-action-btn" id="vrd-expand-all">Expand all</button>
        <button type="button" class="vrd-action-btn" id="vrd-collapse-all">Collapse all</button>
        <button type="button" class="vrd-action-btn" id="vrd-clear">Clear filters</button>
      </div>
    </div>

    <div class="vrd-filters" role="group" aria-label="Scope filters">
      <button type="button" class="vrd-chip active" data-scope="all">All</button>
      <button type="button" class="vrd-chip" data-scope="federal">Federal</button>
      <button type="button" class="vrd-chip" data-scope="kentucky statewide">Kentucky Statewide</button>
      <button type="button" class="vrd-chip" data-scope="london / laurel county & nearby">Local / Nearby</button>
      <button type="button" class="vrd-chip" data-scope="veteran service organizations">VSO</button>
    </div>

    <div class="vrd-status" id="vrd-status" aria-live="polite">Loading resources…</div>
  </div>

  <div class="vrd-jump-wrap">
    <p class="vrd-jump-title">Jump to a section</p>
    <div class="vrd-jump-links" id="vrd-jump-links"></div>
  </div>

  <div class="vrd-groups" id="vrd-groups">
    <p><strong>Veteran Resources Directory — London &amp; Laurel County, Kentucky</strong><br>
    Federal, Kentucky Statewide, and Local/Nearby resources. Grouped in numbered order and alphabetized inside each section.</p>

    <div class="group">
      <h2>1. Benefits &amp; Claims Assistance</h2>

      <h3>Federal</h3>
      <ul>
        <li><strong>GI Bill Hotline</strong>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18884424551">1-888-442-4551</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://benefits.va.gov/gibill/contact_us.asp" target="_blank" rel="noopener noreferrer">https://benefits.va.gov/gibill/contact_us.asp</a></span>
          <span class="note">VA education benefits help.</span>
        </li>
        <li><strong>U.S. Department of Veterans Affairs (VA) — Main Benefits Line</strong>
          <span class="meta"><strong>Address:</strong> 810 Vermont Ave NW, Washington, DC 20420</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18008271000">1-800-827-1000</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.va.gov" target="_blank" rel="noopener noreferrer">https://www.va.gov</a></span>
          <span class="note">Primary federal agency for disability compensation, pension, education, housing loans, life insurance, burial, and more.</span>
        </li>
        <li><strong>VA Benefits Hotline</strong>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18008271000">1-800-827-1000</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.benefits.va.gov/benefits/offices.asp" target="_blank" rel="noopener noreferrer">https://www.benefits.va.gov/benefits/offices.asp</a></span>
          <span class="note">Disability, pension, claims, and general VBA questions.</span>
        </li>
        <li><strong>VA Benefits Online Application Portal (VA.gov)</strong>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18008271000">1-800-827-1000</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.va.gov/disability/" target="_blank" rel="noopener noreferrer">https://www.va.gov/disability/</a></span>
          <span class="note">Apply online for disability compensation, GI Bill, home loans, life insurance, and other benefits.</span>
        </li>
        <li><strong>VA Debt Management Center</strong>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18008270648">1-800-827-0648</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.va.gov/resources/va-debt-management/" target="_blank" rel="noopener noreferrer">https://www.va.gov/resources/va-debt-management/</a></span>
          <span class="note">Help with VA benefit overpayment debt.</span>
        </li>
        <li><strong>VA Veteran Readiness &amp; Employment (VR&amp;E / Chapter 31)</strong>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18008271000">1-800-827-1000</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.va.gov/careers-employment/vocational-rehabilitation/" target="_blank" rel="noopener noreferrer">https://www.va.gov/careers-employment/vocational-rehabilitation/</a></span>
          <span class="note">Career counseling, training, and employment assistance for veterans with service-connected disabilities.</span>
        </li>
      </ul>

      <h3>Kentucky Statewide</h3>
      <ul>
        <li><strong>KDVA Benefits Representative for Laurel County (Joseph Trinetto)</strong>
          <span class="meta"><strong>Phone:</strong> <a href="tel:6063441003">606-344-1003</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://veterans.ky.gov/Benefits/Pages/Your-Benefits-Representative.aspx" target="_blank" rel="noopener noreferrer">https://veterans.ky.gov/Benefits/Pages/Your-Benefits-Representative.aspx</a></span>
          <span class="note">Free accredited veterans benefits assistance serving Laurel and nearby counties.</span>
        </li>
        <li><strong>KDVA London Regional Office — Benefits Representative (Serving Laurel County)</strong>
          <span class="meta"><strong>Address:</strong> Travels to and serves Bell, Clay, Knox, Laurel, Owsley &amp; Whitley Counties</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:5025649203">(502) 564-9203</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://veterans.ky.gov/Benefits/Pages/Your-Benefits-Representative.aspx" target="_blank" rel="noopener noreferrer">https://veterans.ky.gov/Benefits/Pages/Your-Benefits-Representative.aspx</a></span>
          <span class="note">Free accredited veterans benefits assistance for Bell, Clay, Knox, Laurel, Owsley, and Whitley counties.</span>
        </li>
        <li><strong>Kentucky Department of Veterans Affairs (KDVA) — Frankfort HQ</strong>
          <span class="meta"><strong>Address:</strong> 1111B Louisville Rd, Frankfort, KY 40601</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:5025649203">(502) 564-9203</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://veterans.ky.gov" target="_blank" rel="noopener noreferrer">https://veterans.ky.gov</a></span>
          <span class="note">Kentucky's primary state agency for veteran benefits, claims assistance, cemeteries, long-term care, and special programs.</span>
        </li>
        <li><strong>London Regional Veteran Benefits Assistance (KDVA listing)</strong>
          <span class="meta"><strong>Phone:</strong> <a href="tel:6063441003">606-344-1003</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://uwbg211.org/search/12a50425-7db5-5586-a1ae-a1932c140a11" target="_blank" rel="noopener noreferrer">https://uwbg211.org/search/12a50425-7db5-5586-a1ae-a1932c140a11</a></span>
          <span class="note">Appointment-based benefits assistance for Laurel-area Veterans.</span>
        </li>
      </ul>

      <h3>Veteran Service Organizations</h3>
      <ul>
        <li><strong>American Legion — National (Claims &amp; Benefits Assistance)</strong>
          <span class="meta"><strong>Address:</strong> 700 N Pennsylvania St, Indianapolis, IN 46204</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18004333318">1-800-433-3318</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.legion.org" target="_blank" rel="noopener noreferrer">https://www.legion.org</a></span>
          <span class="note">Free VA claims representation for veterans and families through accredited service officers.</span>
        </li>
        <li><strong>American Legion Post 16 — London, KY</strong>
          <span class="meta"><strong>Address:</strong> 1785 Barbourville St, London, KY 40741</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:6068642627">606-864-2627</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://americanlegionpost16.org" target="_blank" rel="noopener noreferrer">https://americanlegionpost16.org</a></span>
          <span class="note">Local American Legion post serving Laurel County veterans with claims help, community programs, and membership.</span>
        </li>
        <li><strong>DAV — Kentucky Department</strong>
          <span class="meta"><strong>Address:</strong> P.O. Box 129, Shepherdsville, KY 40165</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18774262838">1-877-426-2838</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://davwebsites.dav.org/ky/" target="_blank" rel="noopener noreferrer">https://davwebsites.dav.org/ky/</a></span>
          <span class="note">State-level DAV coordination of claims, advocacy, and services for Kentucky disabled veterans.</span>
        </li>
        <li><strong>Disabled American Veterans (DAV) — National Headquarters</strong>
          <span class="meta"><strong>Address:</strong> 3725 Alexandria Pike, Cold Spring, KY 41076</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18774262838">1-877-426-2838</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.dav.org" target="_blank" rel="noopener noreferrer">https://www.dav.org</a></span>
          <span class="note">Free VA claims assistance, benefits counseling, and transportation to VA appointments for disabled veterans.</span>
        </li>
        <li><strong>Disabled American Veterans Chapter 66</strong>
          <span class="meta"><strong>Phone:</strong> <a href="tel:6068771308">606-877-1308</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://davwebsites.dav.org/ky/66/SystemPages/Home.aspx" target="_blank" rel="noopener noreferrer">https://davwebsites.dav.org/ky/66/SystemPages/Home.aspx</a></span>
          <span class="note">London DAV chapter.</span>
        </li>
        <li><strong>Laurel County VFW Post 3302</strong>
          <span class="meta"><strong>Address:</strong> 3027 West Laurel Rd, London, KY</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:6063895229">606-389-5229</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://vfwky.org/di/vfw/v2/postroster.asp" target="_blank" rel="noopener noreferrer">https://vfwky.org/di/vfw/v2/postroster.asp</a></span>
          <span class="note">London VFW post.</span>
        </li>
        <li><strong>VFW — National Headquarters</strong>
          <span class="meta"><strong>Address:</strong> 406 W 34th St, Kansas City, MO 64111</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18167563390">1-816-756-3390</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.vfw.org" target="_blank" rel="noopener noreferrer">https://www.vfw.org</a></span>
          <span class="note">The nation's largest war veterans service organization. Free claims assistance, advocacy, and community support.</span>
        </li>
        <li><strong>VFW Post 3302 — Laurel County Post, London, KY</strong>
          <span class="meta"><strong>Address:</strong> 3027 West Laurel Rd, London, KY</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18167563390">1-816-756-3390</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.vfw.org/find-a-post" target="_blank" rel="noopener noreferrer">https://www.vfw.org/find-a-post</a></span>
          <span class="note">Veterans of Foreign Wars local post serving London/Laurel County.</span>
        </li>
      </ul>
    </div>

    <div class="group">
      <h2>2. Burial &amp; Cemetery Benefits</h2>

      <h3>Federal</h3>
      <ul>
        <li><strong>Camp Nelson National Cemetery</strong>
          <span class="meta"><strong>Address:</strong> 6980 Danville Rd, Nicholasville, KY 40356</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18005351117">1-800-535-1117</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.cem.va.gov/cems/nchp/CampNelson.asp" target="_blank" rel="noopener noreferrer">https://www.cem.va.gov/cems/nchp/CampNelson.asp</a></span>
          <span class="note">National cemetery serving Kentucky veterans.</span>
        </li>
        <li><strong>National Cemetery Scheduling Office</strong>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18005351117">1-800-535-1117</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.cem.va.gov" target="_blank" rel="noopener noreferrer">https://www.cem.va.gov</a></span>
          <span class="note">Schedule burial at a national cemetery.</span>
        </li>
        <li><strong>VA Burial Benefits — Funeral Expense Allowance</strong>
          <span class="meta"><strong>Phone:</strong> <a href="tel:18008271000">1-800-827-1000</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://www.va.gov/burials-memorials/" target="_blank" rel="noopener noreferrer">https://www.va.gov/burials-memorials/</a></span>
          <span class="note">VA may reimburse burial and funeral expenses for eligible veterans.</span>
        </li>
      </ul>

      <h3>Kentucky Statewide</h3>
      <ul>
        <li><strong>Kentucky Veterans Cemetery — Central</strong>
          <span class="meta"><strong>Address:</strong> 2501 N Dixie Blvd, Radcliff, KY 40160</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:2703515115">(270) 351-5115</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://veterans.ky.gov/Cemeteries/Pages/Contact-Us-About-State-Veterans-Cemeteries.aspx" target="_blank" rel="noopener noreferrer">https://veterans.ky.gov/Cemeteries/Pages/Contact-Us-About-State-Veterans-Cemeteries.aspx</a></span>
          <span class="note">State veterans cemetery serving central Kentucky.</span>
        </li>
        <li><strong>Kentucky Veterans Cemetery — North</strong>
          <span class="meta"><strong>Address:</strong> 205 Eibeck Lane, Williamstown, KY 41097</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:8598230720">(859) 823-0720</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://veterans.ky.gov/cemeteries" target="_blank" rel="noopener noreferrer">https://veterans.ky.gov/cemeteries</a></span>
          <span class="note">State veterans cemetery serving northern Kentucky.</span>
        </li>
        <li><strong>Kentucky Veterans Cemetery — Northeast</strong>
          <span class="meta"><strong>Address:</strong> 100 Veterans Memorial Dr, Grayson, KY 41143</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:6069295354">(606) 929-5354</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://veterans.ky.gov/Cemeteries/pages/Kentucky-Veterans-Cemetery-North-East.aspx" target="_blank" rel="noopener noreferrer">https://veterans.ky.gov/Cemeteries/pages/Kentucky-Veterans-Cemetery-North-East.aspx</a></span>
          <span class="note">State veterans cemetery serving northeastern Kentucky.</span>
        </li>
        <li><strong>Kentucky Veterans Cemetery — Southeast</strong>
          <span class="meta"><strong>Address:</strong> 1280 Kentucky Highway 118, Hyden, KY 41749</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:6066722750">(606) 672-2750</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://veterans.ky.gov/cemeteries" target="_blank" rel="noopener noreferrer">https://veterans.ky.gov/cemeteries</a></span>
          <span class="note">Closest state veterans cemetery to London/Laurel County.</span>
        </li>
        <li><strong>Kentucky Veterans Cemetery — West</strong>
          <span class="meta"><strong>Address:</strong> 5817 Fort Campbell Blvd, Hopkinsville, KY 42240</span>
          <span class="meta"><strong>Phone:</strong> <a href="tel:2708896106">(270) 889-6106</a></span>
          <span class="meta"><strong>Website:</strong> <a href="https://veterans.ky.gov/Cemeteries/Pages/Contact-Us-About-State-Veterans-Cemeteries.aspx" target="_blank" rel="noopener noreferrer">https://veterans.ky.gov/Cemeteries/Pages/Contact-Us-About-State-Veterans-Cemeteries.aspx</a></span>
          <span class="note">State veterans cemetery serving western Kentucky.</span>
        </li>
      </ul>
    </div>

    <!-- KEEP ALL OF YOUR REMAINING EXISTING .group BLOCKS HERE EXACTLY AS YOU ALREADY HAVE THEM.
         I left the first 2 groups fully included so you can see the structure.
         Paste groups 3 through 15 here unchanged from your current code. -->
  </div>

  <script>
    (function () {
      const root = document.getElementById("veteran-resources-directory");
      if (!root) return;

      const searchInput = root.querySelector("#vrd-search");
      const statusEl = root.querySelector("#vrd-status");
      const jumpLinksEl = root.querySelector("#vrd-jump-links");
      const expandAllBtn = root.querySelector("#vrd-expand-all");
      const collapseAllBtn = root.querySelector("#vrd-collapse-all");
      const clearBtn = root.querySelector("#vrd-clear");
      const filterButtons = Array.from(root.querySelectorAll(".vrd-chip"));
      const groups = Array.from(root.querySelectorAll(".group"));

      const slugify = (value) =>
        String(value)
          .toLowerCase()
          .trim()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");

      const normalize = (value) =>
        String(value || "")
          .toLowerCase()
          .replace(/\s+/g, " ")
          .trim();

      const scopeAliases = {
        "federal": "federal",
        "kentucky statewide": "kentucky statewide",
        "london / laurel county & nearby": "london / laurel county & nearby",
        "veteran service organizations": "veteran service organizations"
      };

      function buildJumpLinks() {
        jumpLinksEl.innerHTML = "";
        groups.forEach((group) => {
          const heading = group.querySelector("h2");
          if (!heading) return;
          const title = heading.textContent.trim();
          const id = slugify(title);
          group.id = id;

          const link = document.createElement("a");
          link.className = "vrd-jump-link";
          link.href = "#" + id;
          link.textContent = title.replace(/^\d+\.\s*/, "");
          jumpLinksEl.appendChild(link);
        });
      }

      function createAccordionButton(labelHtml, countText, className) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = className;

        const left = document.createElement("div");
        left.innerHTML = labelHtml;

        const caret = document.createElement("span");
        caret.className = "vrd-caret";
        caret.setAttribute("aria-hidden", "true");

        if (countText) {
          const count = document.createElement("div");
          count.className = className === "vrd-group-header" ? "vrd-group-count" : "vrd-subsection-count";
          count.textContent = countText;
          left.appendChild(count);
        }

        btn.appendChild(left);
        btn.appendChild(caret);
        return btn;
      }

      function enhanceItems(subsectionTitle, list) {
        const items = Array.from(list.querySelectorAll(":scope > li"));

        items.forEach((item) => {
          item.dataset.scope = normalize(subsectionTitle);

          const strong = item.querySelector("strong");
          const title = strong ? strong.textContent.trim() : "Resource";

          const scopeBadge = document.createElement("span");
          scopeBadge.className = "vrd-scope-badge";
          scopeBadge.textContent = subsectionTitle;

          const titleRow = document.createElement("div");
          titleRow.className = "vrd-item-title-row";

          const titleStrong = document.createElement("strong");
          titleStrong.textContent = title;

          titleRow.appendChild(titleStrong);
          titleRow.appendChild(scopeBadge);

          if (strong && strong.parentElement === item) {
            strong.remove();
            item.insertBefore(titleRow, item.firstChild);
          }

          const phoneLink = item.querySelector('a[href^="tel:"]');
          const webLink = item.querySelector('a[href^="http"]');

          if (phoneLink || webLink) {
            const actions = document.createElement("div");
            actions.className = "vrd-item-actions";

            if (phoneLink) {
              const phoneBtn = document.createElement("a");
              phoneBtn.className = "vrd-item-action";
              phoneBtn.href = phoneLink.href;
              phoneBtn.textContent = "Call";
              actions.appendChild(phoneBtn);
            }

            if (webLink) {
              const webBtn = document.createElement("a");
              webBtn.className = "vrd-item-action";
              webBtn.href = webLink.href;
              webBtn.target = "_blank";
              webBtn.rel = "noopener noreferrer";
              webBtn.textContent = "Website";
              actions.appendChild(webBtn);
            }

            item.appendChild(actions);
          }

          item.dataset.search = normalize(item.textContent);
        });

        return items;
      }

      function enhanceGroups() {
        groups.forEach((group, groupIndex) => {
          const h2 = group.querySelector("h2");
          if (!h2) return;

          const nodes = Array.from(group.children);
          const subsectionPairs = [];
          let currentTitle = null;

          nodes.forEach((node) => {
            if (node.tagName === "H3") {
              currentTitle = node;
            } else if (node.tagName === "UL" && currentTitle) {
              subsectionPairs.push({ heading: currentTitle, list: node });
              currentTitle = null;
            }
          });

          const groupTitle = h2.textContent.trim();
          const groupHeader = createAccordionButton(
            '<div class="vrd-group-title-wrap"><div class="vrd-group-title">' + h2.innerHTML + '</div></div>',
            "",
            "vrd-group-header"
          );

          const groupBody = document.createElement("div");
          groupBody.className = "vrd-group-body";

          let totalItems = 0;

          subsectionPairs.forEach(({ heading, list }, subsectionIndex) => {
            const subsectionTitle = heading.textContent.trim();
            const enhancedItems = enhanceItems(subsectionTitle, list);
            totalItems += enhancedItems.length;

            const subsection = document.createElement("section");
            subsection.className = "vrd-subsection";
            subsection.dataset.scope = normalize(subsectionTitle);

            const subsectionHeader = createAccordionButton(
              '<div><div class="vrd-subsection-title">' + heading.innerHTML + '</div></div>',
              enhancedItems.length + " resources",
              "vrd-subsection-header"
            );

            const subsectionBody = document.createElement("div");
            subsectionBody.className = "vrd-subsection-body";
            subsectionBody.appendChild(list);

            const subsectionId = "vrd-subsection-" + groupIndex + "-" + subsectionIndex;
            subsectionBody.id = subsectionId;
            subsectionHeader.setAttribute("aria-controls", subsectionId);
            subsectionHeader.setAttribute("aria-expanded", "true");

            subsectionHeader.addEventListener("click", function () {
              const open = subsection.classList.toggle("is-open");
              subsectionHeader.setAttribute("aria-expanded", String(open));
              subsectionBody.style.display = open ? "" : "none";
            });

            subsection.classList.add("is-open");
            subsection.appendChild(subsectionHeader);
            subsection.appendChild(subsectionBody);
            groupBody.appendChild(subsection);

            heading.remove();
          });

          const groupCount = groupHeader.querySelector(".vrd-group-count");
          if (groupCount) {
            groupCount.textContent = totalItems + " resources";
          }

          const groupId = group.id || slugify(groupTitle);
          group.id = groupId;

          const groupBodyId = groupId + "-body";
          groupBody.id = groupBodyId;
          groupHeader.setAttribute("aria-controls", groupBodyId);
          groupHeader.setAttribute("aria-expanded", groupIndex === 0 ? "true" : "false");

          groupHeader.addEventListener("click", function () {
            const open = group.classList.toggle("is-open");
            groupHeader.setAttribute("aria-expanded", String(open));
            groupBody.style.display = open ? "" : "none";
          });

          group.innerHTML = "";
          group.appendChild(groupHeader);
          group.appendChild(groupBody);

          if (groupIndex === 0) {
            group.classList.add("is-open");
            groupBody.style.display = "";
          } else {
            group.classList.remove("is-open");
            groupBody.style.display = "none";
          }
        });
      }

      function getAllItems() {
        return Array.from(root.querySelectorAll(".group li"));
      }

      function getAllSubsections() {
        return Array.from(root.querySelectorAll(".vrd-subsection"));
      }

      function setAllGroups(open) {
        groups.forEach((group) => {
          const header = group.querySelector(".vrd-group-header");
          const body = group.querySelector(".vrd-group-body");
          group.classList.toggle("is-open", open);
          if (header) header.setAttribute("aria-expanded", String(open));
          if (body) body.style.display = open ? "" : "none";
        });

        getAllSubsections().forEach((subsection) => {
          const header = subsection.querySelector(".vrd-subsection-header");
          const body = subsection.querySelector(".vrd-subsection-body");
          subsection.classList.toggle("is-open", open);
          if (header) header.setAttribute("aria-expanded", String(open));
          if (body) body.style.display = open ? "" : "none";
        });
      }

      function applyFilters() {
        const query = normalize(searchInput.value);
        const activeButton = root.querySelector(".vrd-chip.active");
        const activeScope = activeButton ? normalize(activeButton.dataset.scope) : "all";

        let visibleItems = 0;
        let visibleGroups = 0;

        groups.forEach((group) => {
          let groupHasVisible = false;
          const subsections = Array.from(group.querySelectorAll(".vrd-subsection"));

          subsections.forEach((subsection) => {
            const subsectionScope = normalize(subsection.dataset.scope);
            const subsectionItems = Array.from(subsection.querySelectorAll("li"));
            let subsectionVisibleCount = 0;

            subsectionItems.forEach((item) => {
              const text = item.dataset.search || "";
              const itemScope = normalize(item.dataset.scope);
              const matchesQuery = !query || text.includes(query);
              const matchesScope = activeScope === "all" || itemScope === activeScope || subsectionScope === activeScope;

              const show = matchesQuery && matchesScope;
              item.classList.toggle("vrd-hidden", !show);

              if (show) {
                subsectionVisibleCount += 1;
                visibleItems += 1;
              }
            });

            const subsectionHeaderCount = subsection.querySelector(".vrd-subsection-count");
            if (subsectionHeaderCount) {
              subsectionHeaderCount.textContent = subsectionVisibleCount + " resource" + (subsectionVisibleCount === 1 ? "" : "s");
            }

            const subsectionHasVisible = subsectionVisibleCount > 0;
            subsection.classList.toggle("vrd-hidden", !subsectionHasVisible);

            if (subsectionHasVisible) {
              groupHasVisible = true;
            }
          });

          const groupVisibleCount = Array.from(group.querySelectorAll("li:not(.vrd-hidden)")).length;
          const groupCount = group.querySelector(".vrd-group-count");
          if (groupCount) {
            groupCount.textContent = groupVisibleCount + " resource" + (groupVisibleCount === 1 ? "" : "s");
          }

          group.classList.toggle("vrd-hidden", !groupHasVisible);

          if (groupHasVisible) {
            visibleGroups += 1;
          }
        });

        statusEl.textContent =
          visibleItems +
          " resource" +
          (visibleItems === 1 ? "" : "s") +
          " found in " +
          visibleGroups +
          " section" +
          (visibleGroups === 1 ? "" : "s") +
          ".";

        let empty = root.querySelector(".vrd-empty");
        if (!visibleItems) {
          if (!empty) {
            empty = document.createElement("div");
            empty.className = "vrd-empty";
            empty.textContent = "No matches found. Try a broader keyword or switch back to All.";
            root.querySelector("#vrd-groups").appendChild(empty);
          }
        } else if (empty) {
          empty.remove();
        }

        if (query || activeScope !== "all") {
          groups.forEach((group) => {
            if (!group.classList.contains("vrd-hidden")) {
              const body = group.querySelector(".vrd-group-body");
              const header = group.querySelector(".vrd-group-header");
              group.classList.add("is-open");
              if (header) header.setAttribute("aria-expanded", "true");
              if (body) body.style.display = "";
            }
          });
        }
      }

      function wireUpControls() {
        filterButtons.forEach((button) => {
          button.addEventListener("click", function () {
            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");
            applyFilters();
          });
        });

        searchInput.addEventListener("input", applyFilters);

        expandAllBtn.addEventListener("click", function () {
          setAllGroups(true);
        });

        collapseAllBtn.addEventListener("click", function () {
          setAllGroups(false);
        });

        clearBtn.addEventListener("click", function () {
          searchInput.value = "";
          filterButtons.forEach((btn) => btn.classList.remove("active"));
          const allBtn = root.querySelector('.vrd-chip[data-scope="all"]');
          if (allBtn) allBtn.classList.add("active");
          applyFilters();
          setAllGroups(false);
          if (groups[0]) {
            const firstGroupHeader = groups[0].querySelector(".vrd-group-header");
            const firstGroupBody = groups[0].querySelector(".vrd-group-body");
            groups[0].classList.add("is-open");
            if (firstGroupHeader) firstGroupHeader.setAttribute("aria-expanded", "true");
            if (firstGroupBody) firstGroupBody.style.display = "";
          }
        });
      }

      buildJumpLinks();
      enhanceGroups();
      wireUpControls();
      applyFilters();
    })();
  </script>
</section>
