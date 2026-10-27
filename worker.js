// --- UNIFIED MARKETING ENGINE: SEARCHABLE GEO-FENCED + TOTAL CLICKS OVERVIEW ---

// 🔒 1. SECURITY SETTINGS
const SECRET_DASHBOARD_PATH = '/dashboard-FDff77'; 
const SAFE_REDIRECT_URL = 'https://google.com'; 

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "TAZAsara"; 

// 🤖 2. BOT DETECTION SETTINGS
const BOT_KEYWORDS = ['bot', 'spider', 'crawler', 'proxy', 'mimecast', 'barracuda', 'proofpoint', 'headless', 'inspect', 'python', 'curl', 'wget', 'httpclient'];

// 🌍 COMPREHENSIVE ISO COUNTRY LIST
const ALL_COUNTRIES_LIST = [
    { code: "AF", name: "Afghanistan" }, { code: "AL", name: "Albania" }, { code: "DZ", name: "Algeria" },
    { code: "AD", name: "Andorra" }, { code: "AO", name: "Angola" }, { code: "AG", name: "Antigua and Barbuda" },
    { code: "AR", name: "Argentina" }, { code: "AM", name: "Armenia" }, { code: "AU", name: "Australia" },
    { code: "AT", name: "Austria" }, { code: "AZ", name: "Azerbaijan" }, { code: "BS", name: "Bahamas" },
    { code: "BH", name: "Bahrain" }, { code: "BD", name: "Bangladesh" }, { code: "BB", name: "Barbados" },
    { code: "BY", name: "Belarus" }, { code: "BE", name: "Belgium" }, { code: "BZ", name: "Belize" },
    { code: "BJ", name: "Benin" }, { code: "BT", name: "Bhutan" }, { code: "BO", name: "Bolivia" },
    { code: "BA", name: "Bosnia and Herzegovina" }, { code: "BW", name: "Botswana" }, { code: "BR", name: "Brazil" },
    { code: "BN", name: "Brunei" }, { code: "BG", name: "Bulgaria" }, { code: "BF", name: "Burkina Faso" },
    { code: "BI", name: "Burundi" }, { code: "KH", name: "Cambodia" }, { code: "CM", name: "Cameroon" },
    { code: "CA", name: "Canada" }, { code: "CL", name: "Chile" }, { code: "CN", name: "China" },
    { code: "CO", name: "Colombia" }, { code: "CR", name: "Costa Rica" }, { code: "HR", name: "Croatia" },
    { code: "CU", name: "Cuba" }, { code: "CY", name: "Cyprus" }, { code: "CZ", name: "Czech Republic" },
    { code: "DK", name: "Denmark" }, { code: "DO", name: "Dominican Republic" }, { code: "EC", name: "Ecuador" },
    { code: "EG", name: "Egypt" }, { code: "SV", name: "El Salvador" }, { code: "EE", name: "Estonia" },
    { code: "ET", name: "Ethiopia" }, { code: "FI", name: "Finland" }, { code: "FR", name: "France" },
    { code: "GE", name: "Georgia" }, { code: "DE", name: "Germany" }, { code: "GH", name: "Ghana" },
    { code: "GR", name: "Greece" }, { code: "GT", name: "Guatemala" }, { code: "HN", name: "Honduras" },
    { code: "HK", name: "Hong Kong" }, { code: "HU", name: "Hungary" }, { code: "IS", name: "Iceland" },
    { code: "IN", name: "India" }, { code: "ID", name: "Indonesia" }, { code: "IR", name: "Iran" },
    { code: "IQ", name: "Iraq" }, { code: "IE", name: "Ireland" }, { code: "IL", name: "Israel" },
    { code: "IT", name: "Italy" }, { code: "JM", name: "Jamaica" }, { code: "JP", name: "Japan" },
    { code: "JO", name: "Jordan" }, { code: "KZ", name: "Kazakhstan" }, { code: "KE", name: "Kenya" },
    { code: "KW", name: "Kuwait" }, { code: "KG", name: "Kyrgyzstan" }, { code: "LV", name: "Latvia" },
    { code: "LB", name: "Lebanon" }, { code: "LY", name: "Libya" }, { code: "LT", name: "Lithuania" },
    { code: "LU", name: "Luxembourg" }, { code: "MY", name: "Malaysia" }, { code: "MX", name: "Mexico" },
    { code: "MD", name: "Moldova" }, { code: "MC", name: "Monaco" }, { code: "ME", name: "Montenegro" },
    { code: "MA", name: "Morocco" }, { code: "NP", name: "Nepal" }, { code: "NL", name: "Netherlands" },
    { code: "NZ", name: "New Zealand" }, { code: "NI", name: "Nicaragua" }, { code: "NG", name: "Nigeria" },
    { code: "NO", name: "Norway" }, { code: "OM", name: "Oman" }, { code: "PK", name: "Pakistan" },
    { code: "PA", name: "Panama" }, { code: "PY", name: "Paraguay" }, { code: "PE", name: "Peru" },
    { code: "PH", name: "Philippines" }, { code: "PL", name: "Poland" }, { code: "PT", name: "Portugal" },
    { code: "QA", name: "Qatar" }, { code: "RO", name: "Romania" }, { code: "RU", name: "Russia" },
    { code: "SA", name: "Saudi Arabia" }, { code: "RS", name: "Serbia" }, { code: "SG", name: "Singapore" },
    { code: "SK", name: "Slovakia" }, { code: "SI", name: "Slovenia" }, { code: "ZA", name: "South Africa" },
    { code: "KR", name: "South Korea" }, { code: "ES", name: "Spain" }, { code: "LK", name: "Sri Lanka" },
    { code: "SE", name: "Sweden" }, { code: "CH", name: "Switzerland" }, { code: "TW", name: "Taiwan" },
    { code: "TH", name: "Thailand" }, { code: "TN", name: "Tunisia" }, { code: "TR", name: "Turkey" },
    { code: "UA", name: "Ukraine" }, { code: "AE", name: "United Arab Emirates" }, { code: "GB", name: "United Kingdom" },
    { code: "US", name: "United States" }, { code: "UY", name: "Uruguay" }, { code: "UZ", name: "Uzbekistan" },
    { code: "VE", name: "Venezuela" }, { code: "VN", name: "Vietnam" }
];

export default {
    async fetch(request, env, ctx) {
        return handleRequest(request, env, ctx);
    }
};

// ============================================================================
// 📱 1. APP CLIENT DETECTOR
// ============================================================================
function getClientApp(request) {
    const ua = request.headers.get('User-Agent') || '';
    
    if (ua.includes('GoogleImageProxy')) return "✉️ Gmail Proxy";
    if (ua.includes('YahooMailProxy')) return "🟣 Yahoo Mail Proxy";
    if (ua.includes('WebKit_version')) return "🍎 Apple Mail / iCloud";
    if (/Outlook-iOS/i.test(ua)) return "📱 Outlook iOS App";
    if (/Outlook-Android/i.test(ua)) return "📱 Outlook Android App";
    if (ua.includes('Microsoft Office')) return "💻 Outlook Desktop";
    if (ua.includes('Thunderbird/')) return "🦅 Thunderbird";
    if (ua.includes('Superhuman/')) return "⚡ Superhuman App";
    if (/Edg\//i.test(ua)) return "🟦 Microsoft Edge";
    if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) return "🔵 Google Chrome";
    if (/Firefox\//i.test(ua)) return "🦊 Mozilla Firefox";
    if (/Safari\//i.test(ua) && !/Chrome/i.test(ua)) return "🧭 Apple Safari";
    if (ua.includes('iPhone') || ua.includes('iPad')) return "📱 iOS Device";
    if (ua.includes('Android')) return "🤖 Android Device";
    if (ua.includes('Windows NT')) return "💻 Windows PC";
    if (ua.includes('Macintosh')) return "💻 Mac Computer";
    
    return "🌐 Unknown Browser/App";
}

// ============================================================================
// 🤖 2. BOT STATUS DETECTOR
// ============================================================================
function checkIfBot(request) {
    const asn = Number(request.cf?.asn || 0);
    const ua = (request.headers.get('User-Agent') || '').toLowerCase();
    
    if (ua.includes('googleimageproxy') || ua.includes('yahoomailproxy') || ua.includes('webkit_version')) {
        return 0; 
    }

    const dataCenterASNs = [14618, 16509, 8075, 16276, 24940];
    if (dataCenterASNs.includes(asn)) return 1;
    
    for (let word of BOT_KEYWORDS) {
        if (ua.includes(word)) return 1;
    }
    
    return 0; 
}

// --- HELPER: UI BADGE GENERATOR ---
function getUIBadge(label, rawUA, rawASN) {
    let style = "";
    if (!label || label === 'null') { label = '👤 Human ✓'; style = "color:#28a745; font-weight:bold; font-size:0.85em; cursor:pointer;"; }
    else if (label.includes('Apple')) style = "background:#f3f4f6; color:#374151; border: 1px solid #d1d5db; padding:2px 6px; border-radius:4px; font-size:0.75em; white-space:nowrap; cursor:pointer;";
    else if (label.includes('Gmail')) style = "background:#fee2e2; color:#b91c1c; border: 1px solid #fca5a5; padding:2px 6px; border-radius:4px; font-size:0.75em; white-space:nowrap; cursor:pointer;";
    else if (label.includes('Yahoo')) style = "background:#f3e8ff; color:#7e22ce; border: 1px solid #d8b4fe; padding:2px 6px; border-radius:4px; font-size:0.75em; white-space:nowrap; cursor:pointer;";
    else if (label.includes('Scanner') || label.includes('Crawler') || label.includes('Trap') || label.includes('Geo-Blocked')) style = "background:#fecaca; color:#991b1b; padding:2px 6px; border-radius:4px; font-size:0.75em; white-space:nowrap; cursor:pointer;";
    else style = "background:#e0f2fe; color:#0369a1; border: 1px solid #bae6fd; padding:2px 6px; border-radius:4px; font-size:0.75em; white-space:nowrap; cursor:pointer;";

    const safeUA = (rawUA || 'Unknown').replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    const safeLabel = (label || 'Unknown').replace(/'/g, "&#39;").replace(/"/g, "&quot;");
    
    return `<span style="${style}" onclick="showRawData(event, '${safeLabel}', '${safeUA}', '${rawASN}')" title="Click to view Raw Request Data">${label}</span>`;
}

// --- HELPERS ---
function getClientIp(request) {
    return request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || 'Unknown';
}
function getClientIsp(request) {
    return request.cf?.asOrganization || 'Unknown';
}

// --- HELPER: PASSWORD PROTECTION ---
function checkAuth(request) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) return false;
    
    const [scheme, encoded] = authHeader.split(' ');
    if (scheme !== 'Basic' || !encoded) return false;
    
    try {
        const decoded = atob(encoded);
        const [user, pass] = decoded.split(':');
        return user === ADMIN_USERNAME && pass === ADMIN_PASSWORD;
    } catch (e) {
        return false;
    }
}

function requireAuth() {
    return new Response('Unauthorized. Please log in.', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="Secure Marketing Engine"' }
    });
}

// --- ROUTER ---
async function handleRequest(request, env, ctx) { 
    const url = new URL(request.url); 
    const path = url.pathname; 

    const corsHeaders = { 
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Methods": "*", 
        "Access-Control-Allow-Headers": "*" 
    };
    
    if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

    // 1. PUBLIC TRACKER ROUTES
    if (path === '/track.gif') return handleTrackingPixel(request, env);
    if (path === '/unsubscribe') return handleUnsubscribe(request, env);
    
    if (path === '/api/logs' && request.method === 'DELETE') return handleDeleteLogs(request, env, corsHeaders);
    if (path === '/api/logs' && request.method === 'GET') return handleGetLogs(request, env, corsHeaders);

    // 2. SECURE ROUTES
    const isDashboardRoute = path === SECRET_DASHBOARD_PATH;
    const isApiRoute = path.startsWith('/api/links/');
    const isAnalyticsRoute = path.startsWith('/analytics/');

    if (isDashboardRoute || isApiRoute || isAnalyticsRoute) {
        if (!checkAuth(request)) return requireAuth();
        if (isDashboardRoute && request.method === 'GET') return handleMainPageRequest(request, env); 
        if (isDashboardRoute && request.method === 'POST') return handleShortenRequest(request, env); 
        if (isApiRoute && request.method === 'PATCH') return handleUpdateRequest(request, env, path.substring('/api/links/'.length)); 
        if (isApiRoute && request.method === 'DELETE') return handleDeleteRequest(env, path.substring('/api/links/'.length)); 
        if (isAnalyticsRoute) return handleAnalyticsPageRequest(request, env, path.substring('/analytics/'.length)); 
    }
    
    // 3. SECURITY REDIRECT
    if (path === '/' || path === '') return new Response('404 Not Found', { status: 404 });

    // 4. REDIRECT CATCHER
    if (path !== '/favicon.ico') return handleCountAndRedirectRequest(request, env, path.slice(1)); 
    
    return new Response(null, { status: 204 }); 
}

// --- UNSUBSCRIBE LOGIC ---
async function handleUnsubscribe(request, env) {
    const url = new URL(request.url);
    let email = null, profileName = 'Unknown';
    const dataParam = url.searchParams.get('data');

    if (dataParam) {
        try {
            const decoded = JSON.parse(atob(dataParam));
            email = decoded.e; profileName = decoded.p; 
        } catch(e) {}
    } else {
        email = url.searchParams.get('email');
        profileName = url.searchParams.get('profile') || 'Unknown';
    }

    if (!email) {
        return new Response("Invalid unsubscribe link.", { status: 400 });
    }

    const clientApp = getClientApp(request);
    const isBot = checkIfBot(request);
    const rawUA = request.headers.get('User-Agent') || 'None';
    const asn = request.cf?.asn || 'None';
    const botReasonPayload = JSON.stringify({ label: clientApp, ua: rawUA, asn: asn });
    
    const ip = getClientIp(request);
    const isp = getClientIsp(request);
    const countryCode = request.cf?.country || 'Unknown';

    try {
        await env.DB.prepare(
            'INSERT INTO unsubscribes (email, profileName, country, ip, isp, is_bot, bot_reason, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)'
        ).bind(email, profileName, countryCode, ip, isp, isBot, botReasonPayload).run();
    } catch (e) {
        console.error("Unsubscribe DB Error:", e);
    }

    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Unsubscribe Successful</title>
        <style>
            body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f4f7f9; margin: 0; }
            .card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); text-align: center; max-width: 450px; width: 90%; }
            .icon { font-size: 50px; color: #dc3545; margin-bottom: 15px; }
            h2 { color: #333; margin-top: 0; margin-bottom: 10px; }
            p { color: #666; font-size: 1.05em; line-height: 1.5; }
            .email-text { font-weight: bold; color: #dc3545; background: #fff0f0; padding: 4px 8px; border-radius: 4px; word-break: break-all; }
        </style>
    </head>
    <body>
        <div class="card">
            <div class="icon">🛑</div>
            <h2>Unsubscribed</h2>
            <p>The email address <br><span class="email-text">${email}</span><br>has been successfully removed from our mailing list.</p>
            <p style="font-size: 0.9em; color: #999; margin-top: 30px;">You may now close this window safely.</p>
        </div>
    </body>
    </html>`;
    
    return new Response(html, { headers: { "Content-Type": "text/html;charset=UTF-8" } });
}

// --- TRACKING PIXEL LOGIC ---
async function handleTrackingPixel(request, env) {
    const url = new URL(request.url);
    let email = null, ticketId = 'Bulk', profileName = 'Unknown';
    const dataParam = url.searchParams.get('data');

    if (dataParam) {
        try {
            const decoded = JSON.parse(atob(dataParam));
            email = decoded.e; profileName = decoded.p; ticketId = decoded.t;
        } catch(e) {}
    } else {
        email = url.searchParams.get('email');
        ticketId = url.searchParams.get('ticketId') || 'Bulk';
        profileName = url.searchParams.get('profile') || 'Unknown';
    }   
    
    const clientApp = getClientApp(request);
    const isBot = checkIfBot(request);
    const rawUA = request.headers.get('User-Agent') || 'None';
    const asn = request.cf?.asn || 'None';
    const botReasonPayload = JSON.stringify({ label: clientApp, ua: rawUA, asn: asn });
    
    const ip = getClientIp(request);
    const isp = getClientIsp(request);

    if (email) {
        const countryCode = request.cf?.country || 'Unknown';
        if (profileName === 'Unknown') {
            try {
                const known = await env.DB.prepare(`SELECT profileName FROM openers WHERE email = ? AND profileName != 'Unknown' ORDER BY openedAt DESC LIMIT 1`).bind(email).first();
                if (known && known.profileName) profileName = known.profileName;
            } catch(e) {}
        }
        try {
            const recentOpen = await env.DB.prepare(
                `SELECT id FROM openers WHERE email = ? AND ticketId = ? AND openedAt > datetime('now', '-10 seconds')`
            ).bind(email, ticketId).first();

            if (!recentOpen) {
                await env.DB.prepare(
                    'INSERT INTO openers (email, ticketId, openedAt, country, profileName, is_bot, bot_reason, ip, isp) VALUES (?, ?, CURRENT_TIMESTAMP, ?, ?, ?, ?, ?, ?)'
                ).bind(email, ticketId, countryCode, profileName, isBot, botReasonPayload, ip, isp).run();
            }
        } catch (e) { console.error("D1 Insert Error:", e); }
    }

    const base64Gif = "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    const binaryGif = Uint8Array.from(atob(base64Gif), c => c.charCodeAt(0));
    
    return new Response(binaryGif, { 
        headers: { 
            "Content-Type": "image/gif", 
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0", 
            "Pragma": "no-cache", 
            "Expires": "0" 
        } 
    });
}

// ============================================================================
// 🔗 SHORTENER LOGIC WITH MULTI-COUNTRY GEO-FENCING
// ============================================================================
async function handleCountAndRedirectRequest(request, env, shortCode) { 
    try {
        const record = await env.DB.prepare(`SELECT id, long_url, allowed_countries FROM url_mappings WHERE short_code = ?`).bind(shortCode).first();
        if (!record) { return new Response('Short URL not found', { status: 404 }); } 

        let longUrl = record.long_url; 
        const urlObj = new URL(request.url);
        
        let emailParam = null, profileParam = 'Unknown', ticketIdParam = 'Ghost-Click';
        const dataParam = urlObj.searchParams.get('data');

        if (dataParam) {
            try {
                const decoded = JSON.parse(atob(dataParam));
                emailParam = decoded.e; profileParam = decoded.p; ticketIdParam = decoded.t;
            } catch(e) {}
        } else {
            emailParam = urlObj.searchParams.get('email') || null;
            profileParam = urlObj.searchParams.get('profile') || 'Unknown';
            ticketIdParam = urlObj.searchParams.get('ticketId') || 'Ghost-Click';
        }
        
        const ip = getClientIp(request);
        const isp = getClientIsp(request);
        let clientApp = getClientApp(request);
        let isBot = checkIfBot(request);

        const country = request.cf?.country || 'Unknown'; 
        const city = request.cf?.city || 'Unknown'; 
        const referrer = request.headers.get('Referer') || 'Direct'; 

        // --- GEO-FENCING CHECK ---
        const allowedCountries = record.allowed_countries || 'ALL';
        let isGeoAllowed = false;

        if (allowedCountries === 'ALL' || allowedCountries.includes('ALL')) {
            isGeoAllowed = true;
        } else {
            const countryList = allowedCountries.split(',').map(c => c.trim().toUpperCase());
            if (countryList.includes(country.toUpperCase())) {
                isGeoAllowed = true;
            }
        }

        const rawUA = request.headers.get('User-Agent') || 'None';
        const asn = request.cf?.asn || 'None';

        // IF NOT ALLOWED BY COUNTRY FILTER: Redirect to Google & Log as Bot
        if (!isGeoAllowed) {
            isBot = 1;
            const botReasonPayload = JSON.stringify({ label: `🛡️ Geo-Blocked (${country})`, ua: rawUA, asn: asn });

            await env.DB.prepare(`INSERT INTO clicks (url_id, email, country, city, browser, os, referrer, is_bot, bot_reason, ip, isp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
                .bind(record.id, emailParam, country, city, clientApp, 'Unknown', referrer, isBot, botReasonPayload, ip, isp).run();

            return Response.redirect(SAFE_REDIRECT_URL, 302);
        }

        // IF ALLOWED BY COUNTRY FILTER: Proceed with normal redirect
        const botReasonPayload = JSON.stringify({ label: clientApp, ua: rawUA, asn: asn });

        await env.DB.prepare(`UPDATE url_mappings SET click_count = click_count + 1 WHERE id = ?`).bind(record.id).run();
        
        await env.DB.prepare(`INSERT INTO clicks (url_id, email, country, city, browser, os, referrer, is_bot, bot_reason, ip, isp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`)
            .bind(record.id, emailParam, country, city, clientApp, 'Unknown', referrer, isBot, botReasonPayload, ip, isp).run();
        
        if (emailParam) {
            try {
                const recentOpen = await env.DB.prepare(
                    `SELECT id FROM openers WHERE email = ? AND profileName = ? AND openedAt > datetime('now', '-1 hour')`
                ).bind(emailParam, profileParam).first();
                
                if (!recentOpen) {
                    await env.DB.prepare(
                        'INSERT INTO openers (email, ticketId, openedAt, country, profileName, is_bot, bot_reason, ip, isp) VALUES (?, ?, CURRENT_TIMESTAMP, ?, ?, ?, ?, ?, ?)'
                    ).bind(emailParam, ticketIdParam, country, profileParam, isBot, botReasonPayload, ip, isp).run();
                }
            } catch(e) {}
        }

        if (!longUrl.startsWith('http://') && !longUrl.startsWith('https://')) longUrl = `http://${longUrl}`; 
        
        return new Response(null, {
            status: 307,
            headers: { 
                'Location': longUrl, 
                'Cache-Control': 'private, no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0, s-maxage=0', 
                'Pragma': 'no-cache', 
                'Expires': '0' 
            }
        });
    } catch (error) { 
        return new Response('Error redirecting.', { status: 500 }); 
    }
}

// --- API & SYSTEM FUNCTIONS ---
async function handleGetLogs(request, env, corsHeaders) {
    try {
        const { results: openers } = await env.DB.prepare('SELECT email, ticketId, openedAt, country, profileName, is_bot, bot_reason, ip, isp FROM openers ORDER BY openedAt DESC').all();
        const { results: clicks } = await env.DB.prepare('SELECT email, created_at, country, is_bot, bot_reason, ip, isp FROM clicks WHERE email IS NOT NULL ORDER BY created_at DESC').all();
        
        const logs = (openers || []).map(op => ({ ...op, openedAt: op.openedAt + "Z", hasClicked: false, clickCount: 0, clickCountry: null }));

        return new Response(JSON.stringify({ success: true, logs }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    } catch (e) {
        return new Response(JSON.stringify({ success: false, error: e.message }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
}

async function handleDeleteLogs(request, env, corsHeaders) {
    if (request.headers.get('x-tracking-secret') !== 'eygirl-secret-key-2026') {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 403, headers: corsHeaders });
    }
    
    await env.DB.prepare('DELETE FROM openers').run();
    await env.DB.prepare('DELETE FROM clicks').run(); 
    try { await env.DB.prepare('DELETE FROM unsubscribes').run(); } catch(e){}
    await env.DB.prepare('UPDATE url_mappings SET click_count = 0').run();
    
    return new Response(JSON.stringify({ success: true, message: "All Logs Cleared" }), { 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
}

async function handleShortenRequest(request, env) { 
    try { 
        const { longUrl, customCode, allowedCountries } = await request.json(); 
        if (!longUrl) return new Response(JSON.stringify({ error: 'longUrl is required' }), { status: 400 }); 

        let finalShortCode = customCode ? customCode.trim().replace(/\s+/g, '-') : generateShortCode(); 
        if (customCode) { 
            const existing = await env.DB.prepare(`SELECT id FROM url_mappings WHERE short_code = ?`).bind(finalShortCode).first();
            if (existing) return new Response(JSON.stringify({ error: 'Custom name taken.' }), { status: 409 }); 
        } 

        const countriesValue = (Array.isArray(allowedCountries) && allowedCountries.length > 0) ? allowedCountries.join(',') : 'ALL';

        const { results } = await env.DB.prepare(`INSERT INTO url_mappings (long_url, short_code, allowed_countries) VALUES (?, ?, ?) RETURNING *`)
            .bind(longUrl, finalShortCode, countriesValue).all();

        return new Response(JSON.stringify(results[0]), { headers: { 'Content-Type': 'application/json' } }); 
    } catch (e) { return new Response(JSON.stringify({ error: 'Failed: ' + e.message }), { status: 500 }); } 
}

async function handleUpdateRequest(request, env, shortCode) { 
    try { 
        const { long_url } = await request.json(); 
        await env.DB.prepare(`UPDATE url_mappings SET long_url = ? WHERE short_code = ?`).bind(long_url, shortCode).run();
        return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' }}); 
    } catch (e) { return new Response(JSON.stringify({ success: false }), { status: 500 }); } 
}

async function handleDeleteRequest(env, shortCode) { 
    try { 
        await env.DB.prepare(`DELETE FROM url_mappings WHERE short_code = ?`).bind(shortCode).run();
        return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' }}); 
    } catch (e) { return new Response(JSON.stringify({ success: false }), { status: 500 }); } 
}

function generateShortCode(length = 7) { 
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
    let result = ''; 
    for (let i = 0; i < length; i++) result += chars.charAt(Math.floor(Math.random() * chars.length)); 
    return result; 
}

// --- DASHBOARD RENDERING ---
async function handleMainPageRequest(request, env) { 
    try { 
        const origin = new URL(request.url).origin; 
        
        try { await env.DB.prepare(`ALTER TABLE url_mappings ADD COLUMN allowed_countries TEXT DEFAULT 'ALL'`).run(); } catch (e) {}
        try { await env.DB.prepare(`SELECT 1 FROM unsubscribes LIMIT 1`).first(); } 
        catch (e) { await env.DB.prepare(`CREATE TABLE IF NOT EXISTS unsubscribes (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, profileName TEXT, country TEXT, ip TEXT, isp TEXT, is_bot INTEGER, bot_reason TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)`).run(); }

        const [
            linksCountRes, clicksTotalRes, opensCountRes, uniqueClicksRes, 
            botOpensRes, botClicksRes, { results: userOpens }, trueUniqueUsersRes,
            { results: rawUnsubscribes }, unsubCountRes
        ] = await Promise.all([
            env.DB.prepare(`SELECT COUNT(*) as c FROM url_mappings`).first(),
            env.DB.prepare(`SELECT COUNT(*) as total FROM clicks`).first(),
            env.DB.prepare(`SELECT COUNT(*) as c FROM openers`).first(),
            env.DB.prepare(`SELECT COUNT(DISTINCT email) as c FROM clicks WHERE email IS NOT NULL`).first(),
            env.DB.prepare(`SELECT COUNT(*) as c FROM openers WHERE is_bot = 1`).first(),
            env.DB.prepare(`SELECT COUNT(*) as c FROM clicks WHERE is_bot = 1`).first(),
            env.DB.prepare(`SELECT email, COUNT(*) as count FROM openers WHERE email IS NOT NULL GROUP BY email LIMIT 2000`).all(),
            env.DB.prepare(`SELECT COUNT(DISTINCT email) as c FROM openers WHERE email IS NOT NULL`).first(),
            env.DB.prepare(`SELECT * FROM unsubscribes ORDER BY created_at DESC LIMIT 2500`).all(),
            env.DB.prepare(`SELECT COUNT(*) as c FROM unsubscribes`).first()
        ]);

        const totalLinks = linksCountRes?.c || 0; 
        const totalClicks = clicksTotalRes?.total || 0; 
        const totalOpens = opensCountRes?.c || 0;
        const uniqueClicks = uniqueClicksRes?.c || 0;
        const totalBotOpens = botOpensRes?.c || 0;
        const totalBotClicks = botClicksRes?.c || 0;
        const trueUniqueUsers = trueUniqueUsersRes?.c || 0;
        const totalUnsubscribes = unsubCountRes?.c || 0;

        // Links query with total clicks included
        const [ { results: recentLinks }, { results: openers }, { results: rawClicks } ] = await Promise.all([
            env.DB.prepare(`
                SELECT u.*, COUNT(c.id) as total_clicks 
                FROM url_mappings u 
                LEFT JOIN clicks c ON u.id = c.url_id 
                GROUP BY u.id 
                ORDER BY u.created_at DESC 
                LIMIT 500
            `).all(),
            env.DB.prepare(`SELECT o.* FROM openers o JOIN (SELECT email, COUNT(*) as total_opens FROM openers GROUP BY email ORDER BY total_opens DESC LIMIT 1000) top_emails ON o.email = top_emails.email GROUP BY o.email ORDER BY top_emails.total_opens DESC`).all(),
            env.DB.prepare(`SELECT * FROM clicks ORDER BY created_at DESC LIMIT 2500`).all()
        ]);

        const formattedLinks = (recentLinks || []).map(link => ({ ...link, created_at: link.created_at + "Z" }));
        const formattedOpeners = (openers || []).map(op => ({ ...op, openedAt: op.openedAt + "Z" }));

        const linkMap = {}; 
        formattedLinks.forEach(l => { linkMap[l.id] = l.short_code; });
        const emailToProfile = {};
        formattedOpeners.forEach(op => { if(op.email) emailToProfile[op.email] = op.profileName; });

        const rawOpensSafe = formattedOpeners.map(o => {
            let label = o.bot_reason || '🌐 Web Browser';
            let ua = 'Unknown', asn = 'Unknown';
            try {
                if (o.bot_reason && o.bot_reason.startsWith('{')) {
                    const parsed = JSON.parse(o.bot_reason); label = parsed.label; ua = parsed.ua; asn = parsed.asn;
                }
            } catch(e) {}
            return {
                date: o.openedAt, email: o.email, country: o.country || 'Unknown', profile: o.profileName || 'Unknown',
                isBot: o.is_bot == 1 || o.is_bot === true, ip: o.ip || '-', isp: o.isp || '-', bot_reason: label, raw_ua: ua, raw_asn: asn
            };
        });

        const rawClicksSafe = (rawClicks || []).map(c => {
            let label = c.bot_reason || '🌐 Web Browser';
            let ua = 'Unknown', asn = 'Unknown';
            try {
                if (c.bot_reason && c.bot_reason.startsWith('{')) {
                    const parsed = JSON.parse(c.bot_reason); label = parsed.label; ua = parsed.ua; asn = parsed.asn;
                }
            } catch(e) {}
            return {
                date: c.created_at + "Z", email: c.email || 'Anonymous', country: c.country || 'Unknown', os: c.os || 'Unknown', browser: c.browser || 'Unknown', profile: emailToProfile[c.email] || 'Unknown',
                isBot: c.is_bot == 1 || c.is_bot === true, ip: c.ip || '-', isp: c.isp || '-', short_code: linkMap[c.url_id] || 'Unknown', bot_reason: label, raw_ua: ua, raw_asn: asn
            };
        });

        const rawUnsubsSafe = (rawUnsubscribes || []).map(u => {
            let label = u.bot_reason || '🌐 Web Browser';
            let ua = 'Unknown', asn = 'Unknown';
            try {
                if (u.bot_reason && u.bot_reason.startsWith('{')) {
                    const parsed = JSON.parse(u.bot_reason); label = parsed.label; ua = parsed.ua; asn = parsed.asn;
                }
            } catch(e) {}
            return {
                date: u.created_at + "Z", email: u.email, profile: u.profileName || 'Unknown', country: u.country || 'Unknown',
                ip: u.ip || '-', isp: u.isp || '-', isBot: u.is_bot == 1 || u.is_bot === true, bot_reason: label, raw_ua: ua, raw_asn: asn
            };
        });

        const clicksMap = {}; const clickCountriesMap = {};
        (rawClicks || []).forEach(c => { 
            if (c.email && c.email !== 'Anonymous') {
                const e = c.email.trim().toLowerCase();
                clicksMap[e] = (clicksMap[e] || 0) + 1;
                if (!clickCountriesMap[e]) { clickCountriesMap[e] = c.country; }
            }
        });

        const opensMap = {};
        (userOpens || []).forEach(o => { 
            if (o.email && o.email !== 'Anonymous') { opensMap[o.email.trim().toLowerCase()] = o.count; }
        });

        const groupedOpensMap = new Map();
        rawOpensSafe.forEach(op => {
            const key = (op.email && op.email !== 'Anonymous') ? op.email.trim().toLowerCase() : `Anon-${op.date}`;
            if (!groupedOpensMap.has(key)) { groupedOpensMap.set(key, op); }
        });
        const uniqueGroupedOpens = Array.from(groupedOpensMap.values());

        const groupedClicksMap = new Map();
        rawClicksSafe.forEach(c => {
            const key = (c.email && c.email !== 'Anonymous') ? c.email.trim().toLowerCase() : `Anon-${c.date}`;
            if (!groupedClicksMap.has(key)) { groupedClicksMap.set(key, c); }
        });
        const uniqueGroupedClicks = Array.from(groupedClicksMap.values());

        let smartGlobalEvents = []; let seenEmails = new Set(); let seenBotOpenEmails = new Set(); let seenBotClickEmails = new Set();
        let allEvents = [];
        rawOpensSafe.forEach(op => allEvents.push({ type: 'Open', time: op.date, email: op.email || 'Anonymous', country: op.country, ip: op.ip, isp: op.isp, source: `👁️ Profile: ${op.profile || 'Unknown'}`, device: '-', isBot: op.isBot, bot_reason: op.bot_reason, raw_ua: op.raw_ua, raw_asn: op.raw_asn }));
        rawClicksSafe.forEach(c => allEvents.push({ type: 'Click', time: c.date, email: c.email || 'Anonymous', country: c.country, ip: c.ip, isp: c.isp, source: `🖱️ Link: ${c.short_code}`, device: `${c.os} / ${c.browser}`, isBot: c.isBot, bot_reason: c.bot_reason, raw_ua: c.raw_ua, raw_asn: c.raw_asn }));
        allEvents.sort((a, b) => new Date(b.time) - new Date(a.time));

        allEvents.forEach(e => {
            let identifier = (e.email && e.email !== 'Anonymous') ? e.email.trim().toLowerCase() : `Anon-${e.time}`;
            if (!seenEmails.has(identifier)) {
                seenEmails.add(identifier);
                const lookupEmail = (e.email && e.email !== 'Anonymous') ? e.email.trim().toLowerCase() : null;
                e.opens = lookupEmail ? (opensMap[lookupEmail] || 0) : 0;
                e.clicks = lookupEmail ? (clicksMap[lookupEmail] || 0) : 0;
                smartGlobalEvents.push(e);
            }
            if (e.isBot) {
                if (e.type === 'Open') { seenBotOpenEmails.add(identifier); } 
                else if (e.type === 'Click') { seenBotClickEmails.add(identifier); }
            }
        });

        const uniqueBotOpens = seenBotOpenEmails.size;
        const uniqueBotClicks = seenBotClickEmails.size;

        const dynamicHtml = generateUnifiedDashboardHtml(formattedLinks, uniqueGroupedOpens, smartGlobalEvents, uniqueGroupedClicks, rawOpensSafe, rawClicksSafe, rawUnsubsSafe, clicksMap, opensMap, clickCountriesMap, origin, totalLinks, totalClicks, uniqueClicks, totalOpens, totalBotOpens, uniqueBotOpens, totalBotClicks, uniqueBotClicks, trueUniqueUsers, totalUnsubscribes); 
        return new Response(dynamicHtml, { headers: { 'Content-Type': 'text/html;charset=UTF-8', 'Cache-Control': 'no-cache' } }); 
    } catch (error) { 
        return new Response(`Error loading dashboard: ${error.message}`, { status: 500, headers: { 'Content-Type': 'text/plain' } }); 
    } 
}

// --- ANALYTICS PAGE ---
async function handleAnalyticsPageRequest(request, env, shortCode) {
    try {
        const linkData = await env.DB.prepare(`SELECT * FROM url_mappings WHERE short_code = ?`).bind(shortCode).first();
        if (!linkData) { return new Response('Link not found.', { status: 404 }); }

        const [ { results: allClicks } ] = await Promise.all([
            env.DB.prepare(`SELECT email, created_at, country, city, os, browser, is_bot, bot_reason, ip, isp FROM clicks WHERE url_id = ? ORDER BY created_at DESC LIMIT 2500`).bind(linkData.id).all(),
        ]);

        const rawClicksSafe = []; 
        let totalHumans = 0;
        let totalBots = 0;
        const uniqueEmailSet = new Set();

        (allClicks || []).forEach(c => {
            let label = c.bot_reason || '🌐 Web Browser'; 
            let ua = 'Unknown'; 
            let asn = 'Unknown';
            try {
                if (c.bot_reason && c.bot_reason.startsWith('{')) { 
                    const parsed = JSON.parse(c.bot_reason); 
                    label = parsed.label; ua = parsed.ua; asn = parsed.asn; 
                }
            } catch(e) {}

            const isBot = c.is_bot == 1 || c.is_bot === true;
            if (isBot) totalBots++; else totalHumans++;
            if (c.email && c.email !== 'Anonymous') uniqueEmailSet.add(c.email.toLowerCase().trim());

            rawClicksSafe.push({
                date: c.created_at + "Z", 
                email: c.email || 'Anonymous', 
                country: c.country || 'Unknown', 
                city: c.city || 'Unknown',
                os: c.os || 'Unknown', 
                browser: c.browser || 'Unknown',
                isBot: isBot, 
                ip: c.ip || '-', 
                isp: c.isp || '-', 
                bot_reason: label, 
                raw_ua: ua, 
                raw_asn: asn
            });
        });

        const totalClicks = rawClicksSafe.length;
        const uniqueUsersCount = uniqueEmailSet.size;

        const uniqueCountries = [...new Set(rawClicksSafe.map(c => c.country).filter(c => c && c !== 'Unknown' && c !== '-'))].sort();
        const countryFilterOptions = uniqueCountries.map(c => `<option value="${c}">${c}</option>`).join('');

        const clicksHtmlRows = rawClicksSafe.map((c, i) => {
            const date = new Date(c.date).toLocaleString('en-US', { timeZone: 'America/New_York' });
            const trStyle = c.isBot ? "background: #fff0f0;" : "";
            const statusBadge = c.isBot ? '<span style="color:#dc3545; font-weight:bold;">🤖 Bot</span>' : '<span style="color:#28a745; font-weight:bold;">👤 Human</span>';
            const clientBadge = getUIBadge(c.bot_reason, c.raw_ua, c.raw_asn);
            const safeEmail = c.email !== 'Anonymous' ? c.email : '';
            const emailBadge = safeEmail ? `<span style="color:#0056b3; font-weight:bold;">${c.email}</span>` : '<span style="color:#aaa;">Anonymous</span>';

            return `<tr data-date="${c.date}" data-email="${safeEmail}" data-country="${c.country}" data-isbot="${c.isBot}" style="${trStyle}">
                <td style="text-align:center; font-weight:bold; color:#94a3b8;">${rawClicksSafe.length - i}</td>
                <td style="text-align:center;">${statusBadge}</td>
                <td>${date}</td>
                <td>${emailBadge}</td>
                <td><span style="font-family:monospace; color:#64748b; font-size:0.9em;">${c.ip || '-'}</span></td>
                <td><span style="font-size:0.85em; color:#475569;">${c.isp || '-'}</span></td>
                <td style="text-align:center;"><span style="color:#0ea5e9; font-weight:500;">📍 ${c.country}</span></td>
                <td style="text-align:center;">${clientBadge}</td>
            </tr>`;
        }).join('') || '<tr><td colspan="8" style="text-align:center;">No clicks yet.</td></tr>';

        const pageHtml = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Analytics: /${shortCode}</title>
            <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            <style>
                body { font-family: system-ui, sans-serif; background: #f4f7f9; margin: 0; padding: 2rem; color: #333; }
                .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,.1); max-width: 1400px; margin: auto; }
                .header-bar { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; }
                .back-btn { background: #6c757d; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; display: inline-block; font-weight: bold; }
                .back-btn:hover { background: #5a6268; }
                
                .summary-box { display: flex; justify-content: flex-start; background: #f8f9fa; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 15px; }
                .stat { text-align: center; min-width: 100px; padding: 10px 15px; background: white; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
                .stat-value { font-size: 1.4rem; font-weight: 700; color: #007bff; }
                .stat-label { font-size: .75rem; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
                
                .charts-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem; }
                @media(max-width: 992px) { .charts-grid { grid-template-columns: 1fr; } }
                .chart-card { background: #fff; padding: 1.25rem; border-radius: 8px; border: 1px solid #eee; }
                .chart-container { height: 240px; display: flex; justify-content: center; position: relative; }

                .filter-bar { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; background: #f8f9fa; padding: 12px; border-radius: 6px; margin-bottom: 1rem; }
                input, select { padding: .65rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
                button { background: #007bff; color: white; padding: .65rem 1.25rem; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; }
                button:hover { background: #0056b3; }

                table { width: 100%; border-collapse: collapse; margin-top: 0.5rem; font-size: 0.95em; }
                th, td { padding: 12px 10px; text-align: left; border-bottom: 1px solid #eee; } th { background: #f8f9fa; cursor: pointer; user-select: none; white-space: nowrap; }
                th:hover { background: #e2e6ea; }

                .pagination-controls { display: flex; justify-content: center; align-items: center; gap: 15px; margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 6px; }
                
                #toast { visibility: hidden; min-width: 250px; background: #333; color: #fff; text-align: center; border-radius: 8px; padding: 16px; position: fixed; z-index: 10010; bottom: 30px; left: 50%; transform: translateX(-50%); }
                #toast.show { visibility: visible; }

                .modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 10005; align-items: center; justify-content: center; backdrop-filter: blur(2px); }
                .modal-content { background: #fff; padding: 20px; border-radius: 8px; width: 95%; max-width: 600px; max-height: 90vh; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
                .close-btn { background: #dc3545; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; font-weight: bold; width: auto; float: right; }
            </style>
        </head>
        <body>
            <div id="toast">Message here</div>

            <div id="raw-data-modal" class="modal-overlay" onclick="closeRawModal(event)">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <div style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 10px; display:flex; justify-content:space-between; align-items:center;">
                        <h2 style="margin:0; color:#10b981;">📡 Raw Server Data</h2>
                        <button class="close-btn" onclick="closeRawModal(true)">Close</button>
                    </div>
                    <div id="raw-modal-body-content" style="overflow-y:auto;"></div>
                </div>
            </div>

            <div class="container">
                <div class="header-bar">
                    <div>
                        <a href="${SECRET_DASHBOARD_PATH}" class="back-btn">&larr; Back to Master Dashboard</a>
                        <h1 style="margin: 15px 0 5px 0;">Analytics: /${shortCode}</h1>
                        <p style="margin:0; color:#666; word-break:break-all;"><strong>Destination:</strong> <a href="${linkData.long_url}" target="_blank" style="color:#007bff;">${linkData.long_url}</a></p>
                    </div>
                    <div style="text-align:right;">
                        <span style="font-size:0.85rem; color:#64748b;">Target Geo Filter:</span><br>
                        <span style="background:#e0f2fe; color:#0369a1; padding:4px 10px; border-radius:4px; font-weight:bold; font-size:0.95rem;">${linkData.allowed_countries || 'ALL'}</span>
                    </div>
                </div>

                <!-- KPI STAT CARDS -->
                <div class="summary-box">
                    <div class="stat"><div class="stat-value">${totalClicks}</div><div class="stat-label">Total Clicks</div></div>
                    <div class="stat"><div class="stat-value" style="color:#28a745;">${totalHumans}</div><div class="stat-label">👤 Human Clicks</div></div>
                    <div class="stat"><div class="stat-value" style="color:#dc3545;">${totalBots}</div><div class="stat-label">🤖 Bot / Filtered</div></div>
                    <div class="stat"><div class="stat-value" style="color:#20c997;">${uniqueUsersCount}</div><div class="stat-label">Unique Email Leads</div></div>
                    <div class="stat"><div class="stat-value" style="color:#6366f1;">${totalClicks > 0 ? Math.round((totalHumans / totalClicks) * 100) : 0}%</div><div class="stat-label">Human Accuracy</div></div>
                </div>

                <!-- CHARTS ROW -->
                <div class="charts-grid">
                    <div class="chart-card">
                        <h4 style="margin:0 0 10px 0; text-align:center;">Traffic Quality (Humans vs Bots)</h4>
                        <div class="chart-container"><canvas id="linkTrafficChart"></canvas></div>
                    </div>
                    <div class="chart-card">
                        <h4 style="margin:0 0 10px 0; text-align:center;">Clicks by Country</h4>
                        <div class="chart-container"><canvas id="linkCountryChart"></canvas></div>
                    </div>
                    <div class="chart-card">
                        <h4 style="margin:0 0 10px 0; text-align:center;">Devices & Apps</h4>
                        <div class="chart-container"><canvas id="linkDeviceChart"></canvas></div>
                    </div>
                </div>

                <!-- ADVANCED FILTER BAR -->
                <div class="filter-bar">
                    <input type="text" id="search-link-clicks" placeholder="🔍 Search Email, IP, Country, ISP..." oninput="applyLinkFilters()" style="width:250px; border:2px solid #007bff;">
                    
                    <strong style="font-size:0.9em; margin-left: 5px;">🤖 Status:</strong>
                    <select id="status-link-filter" onchange="applyLinkFilters()" style="color:#007bff; font-weight:bold;">
                        <option value="ALL">All Traffic</option>
                        <option value="HUMAN">👤 Humans Only</option>
                        <option value="BOT">🤖 Bots Only</option>
                    </select>

                    <strong style="font-size:0.9em; margin-left: 5px;">📍 Country:</strong>
                    <select id="country-link-filter" onchange="applyLinkFilters()">
                        <option value="ALL">All Countries</option>
                        ${countryFilterOptions}
                    </select>

                    <strong style="font-size:0.9em; margin-left: 5px;">📅 Date:</strong>
                    <input type="date" id="start-date-link" onchange="applyLinkFilters()" style="padding:5px;">
                    <span style="font-size:0.85em; color:#666;">to</span>
                    <input type="date" id="end-date-link" onchange="applyLinkFilters()" style="padding:5px;">

                    <div style="margin-left:auto; display:flex; gap:6px;">
                        <button onclick="exportLinkCSV()" style="background:#198754; font-size:0.85rem; padding:6px 12px;">📥 Export CSV</button>
                        <button onclick="exportLinkEmails()" style="background:#6366f1; font-size:0.85rem; padding:6px 12px;">📄 Export Emails</button>
                    </div>
                    <span id="filtered-count-badge" style="font-weight:bold; color:#0ea5e9; background:#e0f2fe; padding:6px 12px; border-radius:4px; margin-left:5px;"></span>
                </div>

                <!-- CLICKS TABLE -->
                <div style="max-height: 650px; overflow-y: auto; border: 1px solid #eee; border-radius: 8px;">
                    <table id="link-analytics-table">
                        <thead><tr>
                            <th onclick="sortLinkTable(0)" style="text-align:center;"># ↕</th>
                            <th onclick="sortLinkTable(1)" style="text-align:center;">Status ↕</th>
                            <th onclick="sortLinkTable(2)">Click Time ↕</th>
                            <th onclick="sortLinkTable(3)">User Email ↕</th>
                            <th onclick="sortLinkTable(4)">IP Address ↕</th>
                            <th onclick="sortLinkTable(5)">ISP ↕</th>
                            <th onclick="sortLinkTable(6)" style="text-align:center;">Location ↕</th>
                            <th onclick="sortLinkTable(7)" style="text-align:center;">App / Client ↕</th>
                        </tr></thead>
                        <tbody>${clicksHtmlRows}</tbody>
                    </table>
                </div>

                <div id="pagination-link-analytics-table" class="pagination-controls">
                    <button onclick="changeLinkPage(-1)" style="width:auto; padding: 5px 15px;">&larr; Prev</button>
                    <span id="page-info-link-table" style="font-weight:bold; color:#666;">Page 1</span>
                    <button onclick="changeLinkPage(1)" style="width:auto; padding: 5px 15px;">Next &rarr;</button>
                </div>

            </div>

            <script>
                const rawClicksData = ${JSON.stringify(rawClicksSafe)};
                const ITEMS_PER_PAGE = 500;
                let paginationState = { page: 1, limit: ITEMS_PER_PAGE, rows: [], isFilteringActive: false };

                function showToast(msg) {
                    const t = document.getElementById("toast"); t.textContent = msg; t.className = "show";
                    setTimeout(() => t.className = t.className.replace("show", ""), 3000);
                }

                function showRawData(event, label, ua, asn) {
                    event.stopPropagation();
                    const body = document.getElementById('raw-modal-body-content');
                    const modal = document.getElementById('raw-data-modal');
                    body.innerHTML = \`<div style="background:#1e293b; color:#10b981; font-family:monospace; padding:15px; border-radius:8px; overflow-wrap: break-word;">
                        <p style="margin:0 0 10px 0; color:#cbd5e1;">// THIS IS EXACTLY WHAT THE DEVICE SENT TO YOUR SERVER</p>
                        <p style="margin:0 0 5px 0;"><strong>Detected Label:</strong> \${label}</p>
                        <p style="margin:0 0 5px 0;"><strong>Provider ASN:</strong> \${asn}</p>
                        <p style="margin:0 0 5px 0;"><strong>Raw User-Agent:</strong><br>\${ua}</p>
                    </div>\`;
                    modal.style.display = 'flex';
                }

                function closeRawModal(force) {
                    if (force === true || force.target === document.getElementById('raw-data-modal')) {
                        document.getElementById('raw-data-modal').style.display = 'none';
                    }
                }

                // CHARTS
                let trafficChart, countryChart, deviceChart;
                function initCharts(data) {
                    const humanCount = data.filter(d => !d.isBot).length;
                    const botCount = data.filter(d => d.isBot).length;

                    const countryCounts = {};
                    const deviceCounts = {};
                    data.forEach(d => {
                        countryCounts[d.country] = (countryCounts[d.country] || 0) + 1;
                        const dev = d.os !== 'Unknown' ? d.os : (d.browser !== 'Unknown' ? d.browser : 'Web');
                        deviceCounts[dev] = (deviceCounts[dev] || 0) + 1;
                    });

                    const genColors = (c) => Array.from({length: c}, (_, i) => ['#007bff','#28a745','#ffc107','#dc3545','#6f42c1','#fd7e14','#20c997','#e83e8c'][i % 8]);

                    if (trafficChart) trafficChart.destroy();
                    trafficChart = new Chart(document.getElementById('linkTrafficChart'), {
                        type: 'doughnut',
                        data: {
                            labels: ['👤 Humans', '🤖 Bots'],
                            datasets: [{ data: [humanCount, botCount], backgroundColor: ['#28a745', '#dc3545'] }]
                        },
                        options: { responsive: true, maintainAspectRatio: false }
                    });

                    if (countryChart) countryChart.destroy();
                    countryChart = new Chart(document.getElementById('linkCountryChart'), {
                        type: 'doughnut',
                        data: {
                            labels: Object.keys(countryCounts).length ? Object.keys(countryCounts) : ['No Data'],
                            datasets: [{ data: Object.keys(countryCounts).length ? Object.values(countryCounts) : [1], backgroundColor: genColors(Object.keys(countryCounts).length) }]
                        },
                        options: { responsive: true, maintainAspectRatio: false }
                    });

                    if (deviceChart) deviceChart.destroy();
                    deviceChart = new Chart(document.getElementById('linkDeviceChart'), {
                        type: 'bar',
                        data: {
                            labels: Object.keys(deviceCounts).length ? Object.keys(deviceCounts) : ['No Data'],
                            datasets: [{ label: 'Clicks', data: Object.keys(deviceCounts).length ? Object.values(deviceCounts) : [0], backgroundColor: '#007bff' }]
                        },
                        options: { responsive: true, maintainAspectRatio: false }
                    });
                }

                // FILTERING
                function applyLinkFilters() {
                    const searchVal = document.getElementById('search-link-clicks').value.toLowerCase().trim();
                    const statusFilter = document.getElementById('status-link-filter').value;
                    const countryFilter = document.getElementById('country-link-filter').value;
                    const start = document.getElementById('start-date-link').value;
                    const end = document.getElementById('end-date-link').value;

                    const startObj = start ? new Date(start) : new Date('2000-01-01'); startObj.setHours(0,0,0,0);
                    const endObj = end ? new Date(end) : new Date('2100-01-01'); endObj.setHours(23,59,59,999);

                    const isFilteringActive = (start !== '') || (end !== '') || (countryFilter !== 'ALL') || (statusFilter !== 'ALL') || (searchVal !== '');
                    const matchingRows = [];
                    const filteredData = [];

                    document.querySelectorAll('#link-analytics-table tbody tr').forEach((row, index) => {
                        if (row.cells.length === 1) { row.style.display = 'none'; return; }
                        row.style.display = 'none';

                        const dateStr = row.getAttribute('data-date');
                        const rowCountry = row.getAttribute('data-country');
                        const rowIsBot = row.getAttribute('data-isbot') === 'true';
                        if (!dateStr) return;

                        const rowDate = new Date(dateStr);
                        const matchesDate = (rowDate >= startObj && rowDate <= endObj);
                        const matchesCountry = (countryFilter === 'ALL' || countryFilter === rowCountry);
                        const matchesStatus = (statusFilter === 'ALL') || (statusFilter === 'HUMAN' && !rowIsBot) || (statusFilter === 'BOT' && rowIsBot);
                        const matchesSearch = (searchVal === '' || row.innerText.toLowerCase().includes(searchVal));

                        if (matchesDate && matchesCountry && matchesStatus && matchesSearch) {
                            matchingRows.push(row);
                            filteredData.push(rawClicksData[index]);
                        }
                    });

                    paginationState.rows = matchingRows;
                    paginationState.page = 1;
                    paginationState.isFilteringActive = isFilteringActive;
                    renderLinkPage();

                    document.getElementById('filtered-count-badge').innerText = 'Showing: ' + matchingRows.length;
                    initCharts(filteredData.length > 0 ? filteredData : rawClicksData);
                }

                function renderLinkPage() {
                    const paginationContainer = document.getElementById('pagination-link-analytics-table');
                    paginationState.rows.forEach(r => r.style.display = 'none');
                    const fallbackRow = document.querySelector('#link-analytics-table tbody tr td[colspan]');

                    if (paginationState.rows.length === 0) {
                        if(fallbackRow) fallbackRow.parentElement.style.display = '';
                        if(paginationContainer) paginationContainer.style.display = 'none';
                        return;
                    }
                    if(fallbackRow) fallbackRow.parentElement.style.display = 'none';

                    if (paginationState.isFilteringActive) {
                        paginationState.rows.forEach(r => r.style.display = '');
                        if(paginationContainer) paginationContainer.style.display = 'none';
                    } else {
                        const start = (paginationState.page - 1) * paginationState.limit;
                        const end = start + paginationState.limit;
                        paginationState.rows.slice(start, end).forEach(r => r.style.display = '');
                        if(paginationContainer) paginationContainer.style.display = 'flex';
                        const infoEl = document.getElementById('page-info-link-table');
                        if (infoEl) infoEl.innerText = \`Page \${paginationState.page} of \${Math.ceil(paginationState.rows.length / paginationState.limit) || 1}\`;
                    }
                }

                function changeLinkPage(dir) {
                    if (paginationState.isFilteringActive) return;
                    const maxPage = Math.ceil(paginationState.rows.length / paginationState.limit) || 1;
                    paginationState.page += dir;
                    if (paginationState.page < 1) paginationState.page = 1;
                    if (paginationState.page > maxPage) paginationState.page = maxPage;
                    renderLinkPage();
                }

                // EXPORT
                function exportLinkCSV() {
                    if (!paginationState.rows || paginationState.rows.length === 0) return showToast("No data to export");
                    let csv = [];
                    const table = document.getElementById('link-analytics-table');
                    csv.push(Array.from(table.querySelectorAll("thead th")).map(th => '"' + th.innerText.replace(/ [↑↓↕]/g, '') + '"').join(","));
                    paginationState.rows.forEach(row => {
                        let rowData = [];
                        for (let j = 0; j < row.cells.length; j++) rowData.push('"' + row.cells[j].innerText.replace(/"/g, '""') + '"');
                        csv.push(rowData.join(","));
                    });
                    const link = document.createElement("a");
                    link.download = "analytics_${shortCode}.csv";
                    link.href = window.URL.createObjectURL(new Blob([csv.join(String.fromCharCode(10))], {type: "text/csv"}));
                    document.body.appendChild(link); link.click(); document.body.removeChild(link);
                }

                function exportLinkEmails() {
                    if (!paginationState.rows || paginationState.rows.length === 0) return showToast("No data to export");
                    const uniqueEmails = new Set();
                    paginationState.rows.forEach(row => {
                        const email = row.getAttribute('data-email');
                        if (email && email.trim() !== '' && email !== 'Anonymous') uniqueEmails.add(email.trim());
                    });
                    if (uniqueEmails.size === 0) return showToast("No valid emails found in current filter.");
                    const link = document.createElement("a");
                    link.download = "emails_${shortCode}.txt";
                    link.href = window.URL.createObjectURL(new Blob([Array.from(uniqueEmails).join('\\n')], {type: "text/plain"}));
                    document.body.appendChild(link); link.click(); document.body.removeChild(link);
                }

                // SORTING
                const sortStates = {};
                function sortLinkTable(colIndex) {
                    const table = document.getElementById('link-analytics-table');
                    const tbody = table.querySelector("tbody");
                    const rows = Array.from(tbody.querySelectorAll("tr")).filter(r => r.cells.length > 1);
                    sortStates[colIndex] = sortStates[colIndex] === undefined ? false : !sortStates[colIndex];
                    const sortAsc = sortStates[colIndex];

                    table.querySelectorAll("th").forEach((th, i) => {
                        const text = th.innerText.replace(/ [↑↓↕]/g, '');
                        th.innerText = text + (i === colIndex ? (sortAsc ? " ↑" : " ↓") : " ↕");
                    });

                    rows.sort((a, b) => {
                        let valA, valB;
                        if (colIndex === 2) {
                            valA = new Date(a.getAttribute("data-date")).getTime() || 0;
                            valB = new Date(b.getAttribute("data-date")).getTime() || 0;
                        } else {
                            valA = a.cells[colIndex].innerText.trim();
                            valB = b.cells[colIndex].innerText.trim();
                            const numA = valA.replace(/,/g, ''), numB = valB.replace(/,/g, '');
                            if (!isNaN(numA) && !isNaN(numB) && numA !== '' && numB !== '') { valA = parseInt(numA, 10); valB = parseInt(numB, 10); }
                            else { valA = valA.toLowerCase(); valB = valB.toLowerCase(); }
                        }
                        return valA < valB ? (sortAsc ? -1 : 1) : valA > valB ? (sortAsc ? 1 : -1) : 0;
                    });
                    rows.forEach(row => tbody.appendChild(row));
                    applyLinkFilters();
                }

                window.addEventListener('DOMContentLoaded', () => {
                    applyLinkFilters();
                    initCharts(rawClicksData);
                });
            </script>
        </body>
        </html>`;
        return new Response(pageHtml, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } });
    } catch (error) { return new Response('Error loading analytics: ' + String(error), { status: 500 }); }
}

// --- HTML DASHBOARD TEMPLATE ---
function generateUnifiedDashboardHtml(links, groupedOpeners, smartGlobalEvents, groupedAllClicks, rawOpensSafe, rawClicksSafe, rawUnsubsSafe, clicksMap, opensMap, clickCountriesMap, origin, totalLinks, totalClicks, uniqueClicks, totalOpens, totalBotOpens, uniqueBotOpens, totalBotClicks, uniqueBotClicks, trueUniqueUsers, totalUnsubscribes) { 
    const uniqueProfiles = [...new Set(groupedOpeners.map(op => op.profile || 'Unknown'))].sort();
    const profileOptionsHtml = uniqueProfiles.map(p => `<option value="${p}">${p}</option>`).join('');

    const uniqueCountries = [...new Set([
        ...groupedOpeners.map(op => op.country),
        ...smartGlobalEvents.map(e => e.country)
    ].filter(c => c && c !== 'Unknown' && c !== '-'))].sort();
    const countryOptionsHtml = uniqueCountries.map(c => `<option value="${c}">${c}</option>`).join('');

    const allCountryCheckboxesHtml = ALL_COUNTRIES_LIST.map(c => 
        `<label class="country-item"><input type="checkbox" name="country-check" value="${c.code}" onchange="handleIndividualToggle(this)"> ${c.name} (${c.code})</label>`
    ).join('');

    const linksHtml = links.length > 0 ? links.map(link => { 
        const shortUrl = `${origin}/${link.short_code}`; 
        const date = new Date(link.created_at).toLocaleDateString('en-US', { timeZone: 'America/New_York' }); 
        const allowed = link.allowed_countries || 'ALL';
        const validClicks = link.click_count || 0;
        const totalRawClicks = link.total_clicks !== undefined ? link.total_clicks : validClicks;

        return `<div class="link-card" id="link-${link.short_code}">
            <div class="link-info">
                <p class="short-url">${shortUrl}</p>
                <p class="long-url">${link.long_url}</p>
                <p class="stats">Clicks: <strong>${validClicks}</strong> &nbsp;|&nbsp; Total: <strong>${totalRawClicks}</strong> &nbsp;|&nbsp; Target: <strong style="color:#0284c7;">${allowed}</strong> &nbsp;|&nbsp; Created: ${date}</p>
            </div>
            <div class="link-actions">
                <button class="copy-btn" onclick="copyToClipboard('${shortUrl}')">Copy</button>
                <a href="/analytics/${link.short_code}" class="analytics-btn">Analytics</a>
                <button class="delete-btn" onclick="deleteLink('${link.short_code}')">Delete</button>
            </div>
        </div>`; 
    }).join('') : '<p style="text-align:center;">No links created yet.</p>';

    const totalUnsubsRows = rawUnsubsSafe.length;
    const unsubsHtml = totalUnsubsRows > 0 ? rawUnsubsSafe.map((u, index) => {
        const rowNum = totalUnsubsRows - index;
        const date = new Date(u.date).toLocaleString('en-US', { timeZone: 'America/New_York' });
        const trStyle = u.isBot ? "background: #fff0f0;" : "";
        const statusBadge = u.isBot ? '<span style="color:#dc3545; font-weight:bold;">🤖 Bot</span>' : '<span style="color:#28a745; font-weight:bold;">👤 Human</span>';
        const clientBadge = getUIBadge(u.bot_reason, u.raw_ua, u.raw_asn);

        return `<tr data-date="${u.date}" data-email="${u.email}" data-profile="${u.profile}" data-country="${u.country}" data-isbot="${u.isBot}" style="${trStyle}">
            <td style="font-weight:bold; color:#94a3b8; text-align:center;">${rowNum}</td>
            <td style="text-align:center;">${statusBadge}</td>
            <td>${date}</td>
            <td><span style="color:#dc3545; font-weight:bold; font-size:0.9em;">${u.email}</span></td>
            <td><span style="font-family:monospace; color:#64748b; font-size:0.9em;">${u.ip || '-'}</span></td>
            <td><span style="font-size:0.85em; color:#475569;">${u.isp || '-'}</span></td>
            <td style="text-align:center;"><span style="color:#4b5563; font-weight:500;">📍 ${u.country}</span></td>
            <td>${u.profile}</td>
            <td style="text-align:center;">${clientBadge}</td>
        </tr>`;
    }).join('') : '<tr><td colspan="9" style="text-align:center;">No unsubscribes logged.</td></tr>';

    const totalGroupedOpeners = groupedOpeners.length;
    const openersHtml = groupedOpeners.length > 0 ? groupedOpeners.map((op, index) => {
        const rowNum = totalGroupedOpeners - index;
        const date = new Date(op.date).toLocaleString('en-US', { timeZone: 'America/New_York' });
        
        const lookupEmail = op.email && op.email !== 'Anonymous' ? op.email.trim().toLowerCase() : null;
        const userOpenCount = lookupEmail ? (opensMap[lookupEmail] || 1) : 1;
        const userClickCount = lookupEmail ? (clicksMap[lookupEmail] || 0) : 0;
        const clickCountry = lookupEmail ? clickCountriesMap[lookupEmail] : null;
        
        const isBotFlag = op.isBot;
        const trStyle = isBotFlag ? "background: #fff0f0;" : "";
        const statusBadge = isBotFlag ? '<span style="color:#dc3545; font-weight:bold;">🤖 Bot</span>' : '<span style="color:#28a745; font-weight:bold;">👤 Human</span>';
        const clientBadge = getUIBadge(op.bot_reason, op.raw_ua, op.raw_asn);

        const safeEmail = op.email && op.email !== 'Anonymous' ? op.email : '';
        const emailBadge = op.email && op.email !== 'Anonymous' ? `<span style="color:#0056b3; font-weight:bold; font-size:0.9em;">${op.email}</span>` : '<span style="color:#aaa;">Anonymous</span>';
        
        const openBadge = userOpenCount > 0 
            ? (safeEmail ? `<span class="clickable-badge" onclick="openDetailsModal('open', '${safeEmail}')" style="background:#d1fae5; color:#047857; border: 1px solid #a7f3d0; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;" title="View Open History">${userOpenCount}</span>` : `<span style="background:#d1fae5; color:#047857; border: 1px solid #a7f3d0; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;">${userOpenCount}</span>`)
            : `<span style="color:#ccc; font-weight:bold;">0</span>`;
            
        const clickBadge = userClickCount > 0 
            ? (safeEmail ? `<span class="clickable-badge" onclick="openDetailsModal('click', '${safeEmail}')" style="background:#dbeafe; color:#1e40af; border: 1px solid #bfdbfe; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;" title="View Click History">${userClickCount}</span>` : `<span style="background:#dbeafe; color:#1e40af; border: 1px solid #bfdbfe; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;">${userClickCount}</span>`)
            : `<span style="color:#ccc; font-weight:bold;">0</span>`;
            
        const openLoc = op.country ? `<span style="color:#047857; font-weight:500;">📍 ${op.country}</span>` : `<span style="color:#ccc;">-</span>`;
        const clickLoc = clickCountry ? `<span style="color:#0ea5e9; font-weight:500;">🖱️ ${clickCountry}</span>` : `<span style="color:#ccc;">-</span>`;
        
        return `<tr data-date="${op.date}" data-email="${op.email || ''}" data-profile="${op.profile || 'Unknown'}" data-country="${op.country || '-'}" data-isbot="${isBotFlag}" style="${trStyle}">
            <td style="font-weight:bold; color:#94a3b8; text-align:center;">${rowNum}</td>
            <td style="text-align:center;">${statusBadge}</td>
            <td>${date}</td>
            <td>${emailBadge}</td>
            <td><span style="font-family:monospace; color:#64748b; font-size:0.9em;">${op.ip || '-'}</span></td>
            <td><span style="font-size:0.85em; color:#475569;">${op.isp || '-'}</span></td>
            <td style="text-align:center;">${openBadge}</td>
            <td style="text-align:center;">${clickBadge}</td>
            <td style="text-align:center;">${openLoc}</td>
            <td style="text-align:center;">${clickLoc}</td>
            <td>${op.profile}</td>
            <td style="text-align:center;">${clientBadge}</td>
        </tr>`;
    }).join('') : '<tr><td colspan="12" style="text-align:center;">No opens tracked yet.</td></tr>';

    const totalGlobal = smartGlobalEvents.length;
    const globalHtml = smartGlobalEvents.length > 0 ? smartGlobalEvents.map((e, index) => {
        const rowNum = totalGlobal - index;
        const date = new Date(e.time).toLocaleString('en-US', { timeZone: 'America/New_York' });
        const trStyle = e.isBot ? "background: #fff0f0;" : "";
        const safeEmail = e.email !== 'Anonymous' ? e.email : '';
        const statusBadge = e.isBot ? '<span style="color:#dc3545; font-weight:bold;">🤖 Bot</span>' : '<span style="color:#28a745; font-weight:bold;">👤 Human</span>';
        const clientBadge = getUIBadge(e.bot_reason, e.raw_ua, e.raw_asn);
        const emailBadge = e.email !== 'Anonymous' ? `<span style="color:#374151; font-weight:bold; font-size:0.9em;">${e.email}</span>` : '<span style="color:#aaa;">Anonymous</span>';
        
        const openBadge = e.opens > 0 
            ? (safeEmail ? `<span class="clickable-badge" onclick="openDetailsModal('open', '${safeEmail}')" style="background:#d1fae5; color:#047857; border: 1px solid #a7f3d0; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;">${e.opens}</span>` : `<span style="background:#d1fae5; color:#047857; border: 1px solid #a7f3d0; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;">${e.opens}</span>`)
            : `<span style="color:#ccc; font-weight:bold;">0</span>`;
            
        const clickBadge = e.clicks > 0 
            ? (safeEmail ? `<span class="clickable-badge" onclick="openDetailsModal('click', '${safeEmail}')" style="background:#dbeafe; color:#1e40af; border: 1px solid #bfdbfe; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;">${e.clicks}</span>` : `<span style="background:#dbeafe; color:#1e40af; border: 1px solid #bfdbfe; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;">${e.clicks}</span>`)
            : `<span style="color:#ccc; font-weight:bold;">0</span>`;

        return `<tr data-date="${e.time}" data-email="${safeEmail}" data-type="${e.type}" data-country="${e.country || '-'}" data-isbot="${e.isBot}" style="${trStyle}">
            <td style="font-weight:bold; color:#94a3b8; text-align:center;">${rowNum}</td>
            <td style="text-align:center;">${statusBadge}</td>
            <td>${date}</td>
            <td>${emailBadge}</td>
            <td><span style="font-family:monospace; color:#64748b; font-size:0.9em;">${e.ip || '-'}</span></td>
            <td><span style="font-size:0.85em; color:#475569;">${e.isp || '-'}</span></td>
            <td style="text-align:center;">${openBadge}</td>
            <td style="text-align:center;">${clickBadge}</td>
            <td><span style="font-size:0.85em; font-weight:bold; color:#0f172a;">${e.source}</span></td>
            <td style="text-align:center;"><span style="color:#4b5563; font-weight:500;">📍 ${e.country}</span></td>
            <td style="text-align:center;">${clientBadge}</td> 
        </tr>`;
    }).join('') : '<tr><td colspan="11" style="text-align:center;">No activity logged yet.</td></tr>';

    const totalGroupedClicks = groupedAllClicks.length;
    const allClicksHtml = totalGroupedClicks > 0 ? groupedAllClicks.map((c, index) => {
        const rowNum = totalGroupedClicks - index;
        const date = new Date(c.date).toLocaleString('en-US', { timeZone: 'America/New_York' });
        
        const lookupEmail = c.email && c.email !== 'Anonymous' ? c.email.trim().toLowerCase() : null;
        const userOpenCount = lookupEmail ? (opensMap[lookupEmail] || 0) : 0;
        const userClickCount = lookupEmail ? (clicksMap[lookupEmail] || 1) : 1;

        const isBotFlag = c.isBot;
        const trStyle = isBotFlag ? "background: #fff0f0;" : "";
        const safeEmail = c.email !== 'Anonymous' ? c.email : '';
        const statusBadge = isBotFlag ? '<span style="color:#dc3545; font-weight:bold;">🤖 Bot</span>' : '<span style="color:#28a745; font-weight:bold;">👤 Human</span>';
        const clientBadge = getUIBadge(c.bot_reason, c.raw_ua, c.raw_asn);
        const emailBadge = c.email !== 'Anonymous' ? `<span style="color:#0056b3; font-weight:bold; font-size:0.9em;">${c.email}</span>` : '<span style="color:#aaa;">Anonymous</span>';
        
        const openBadge = userOpenCount > 0 
            ? (safeEmail ? `<span class="clickable-badge" onclick="openDetailsModal('open', '${safeEmail}')" style="background:#d1fae5; color:#047857; border: 1px solid #a7f3d0; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;" title="View Open History">${userOpenCount}</span>` : `<span style="background:#d1fae5; color:#047857; border: 1px solid #a7f3d0; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;">${userOpenCount}</span>`)
            : `<span style="color:#ccc; font-weight:bold;">0</span>`;
            
        const clickBadge = userClickCount > 0 
            ? (safeEmail ? `<span class="clickable-badge" onclick="openDetailsModal('click', '${safeEmail}')" style="background:#dbeafe; color:#1e40af; border: 1px solid #bfdbfe; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;" title="View Click History">${userClickCount}</span>` : `<span style="background:#dbeafe; color:#1e40af; border: 1px solid #bfdbfe; font-size:0.75em; font-weight:bold; padding:2px 8px; border-radius:12px;">${userClickCount}</span>`)
            : `<span style="color:#ccc; font-weight:bold;">0</span>`;

        return `<tr data-date="${c.date}" data-email="${safeEmail}" data-country="${c.country || '-'}" data-isbot="${isBotFlag}" style="${trStyle}">
            <td style="font-weight:bold; color:#94a3b8; text-align:center;">${rowNum}</td>
            <td style="text-align:center;">${statusBadge}</td>
            <td>${date}</td>
            <td><a href="/analytics/${c.short_code}" style="color:#0ea5e9; font-weight:bold; text-decoration:none;">${c.short_code}</a></td>
            <td>${emailBadge}</td>
            <td><span style="font-family:monospace; color:#64748b; font-size:0.9em;">${c.ip || '-'}</span></td>
            <td><span style="font-size:0.85em; color:#475569;">${c.isp || '-'}</span></td>
            <td style="text-align:center;">${openBadge}</td>
            <td style="text-align:center;">${clickBadge}</td>
            <td style="text-align:center;"><span style="color:#0ea5e9; font-weight:500;">🖱️ ${c.country}</span></td>
            <td style="text-align:center;">${clientBadge}</td>
        </tr>`;
    }).join('') : '<tr><td colspan="11" style="text-align:center;">No clicks yet.</td></tr>';

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marketing Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: system-ui, sans-serif; background: #f4f7f9; margin: 0; padding: 2rem 0; color: #333; display: flex; flex-direction: column; align-items: center; }
        .container { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,.1); width: 98%; max-width: 1400px; margin-bottom: 2rem; }
        h1, h2 { margin-top: 0; }
        input, select { width: 100%; padding: .75rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; margin-bottom: 10px; }
        button { background: #007bff; color: white; padding: .75rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-weight: bold; width: 100%; }
        button:hover { background: #0056b3; }
        .summary-box { display: flex; justify-content: center; background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; flex-wrap: wrap; gap: 15px; }
        .stat { text-align: center; min-width: 90px; padding: 10px; background: white; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); border: 1px solid transparent;}
        .clickable-stat { cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .clickable-stat:hover { transform: translateY(-3px); box-shadow: 0 6px 12px rgba(0,0,0,0.15); border-color: #007bff; }
        .stat-value { font-size: 1.5rem; font-weight: 700; color: #007bff; }
        .stat-label { font-size: .75rem; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px; }
        .link-card { border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; }
        .short-url { font-weight: bold; color: #0056b3; margin: 0 0 5px 0; }
        .long-url { font-size: .9em; color: #666; margin: 0 0 5px 0; word-break: break-all; }
        .stats { font-size: .85em; color: #888; margin: 0; }
        .link-actions { display: flex; gap: 5px; }
        .link-actions button, .link-actions a { padding: 6px 12px; font-size: 0.85rem; text-decoration: none; width: auto; }
        .copy-btn { background: #17a2b8; }
        .analytics-btn { background: #6c757d; color: white; }
        .delete-btn { background: #dc3545; }
        table { width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.95em; }
        th, td { padding: 12px 10px; text-align: left; border-bottom: 1px solid #eee; }
        th { background: #f8f9fa; cursor: pointer; user-select: none; white-space: nowrap; }
        th:hover { background: #e2e6ea; }
        #toast { visibility: hidden; min-width: 250px; background: #333; color: #fff; text-align: center; border-radius: 8px; padding: 16px; position: fixed; z-index: 10010; bottom: 30px; left: 50%; transform: translateX(-50%); }
        #toast.show { visibility: visible; }
        .filter-bar { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; background: #f8f9fa; padding: 10px; border-radius: 6px; margin-bottom: 1rem; }
        .charts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
        @media(max-width: 768px) { .charts-grid { grid-template-columns: 1fr; } }
        .chart-container { height: 300px; display: flex; justify-content: center; }
        .pagination-controls { display: flex; justify-content: center; align-items: center; gap: 15px; margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 6px; }
        .clickable-badge { cursor: pointer; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.1s; display: inline-block; }
        .clickable-badge:hover { transform: scale(1.15); }
        .modal-overlay { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 9999; align-items: center; justify-content: center; backdrop-filter: blur(2px); }
        .modal-content { background: #fff; padding: 20px; border-radius: 8px; width: 95%; max-width: 1400px; max-height: 90vh; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.2); }
        .modal-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #eee; padding-bottom: 10px; margin-bottom: 10px; }
        .modal-body { overflow-y: auto; font-size: 0.9em; flex-grow: 1; }
        .close-btn { background: #dc3545; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; font-weight: bold; width: auto; }
        .close-btn:hover { background: #c82333; }

        .country-select-box { border: 1px solid #ccc; border-radius: 6px; padding: 10px; background: #fff; margin-bottom: 15px; }
        .country-search-input { width: 100%; padding: 8px 12px; border: 2px solid #0284c7; border-radius: 4px; margin-bottom: 8px; box-sizing: border-box; font-size:0.95em; }
        .country-checkbox-grid { max-height: 200px; overflow-y: auto; border: 1px solid #e2e8f0; padding: 8px; border-radius: 4px; display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 6px; background: #f8fafc; }
        .country-item { display: flex; align-items: center; gap: 8px; font-size: 0.88em; cursor: pointer; user-select: none; padding: 3px 6px; border-radius: 4px; }
        .country-item:hover { background: #e0f2fe; }
        .country-item input[type="checkbox"] { width: auto; margin: 0; cursor: pointer; }
    </style>
</head>
<body>
    <div id="toast">Message here</div>
    
    <div id="details-modal" class="modal-overlay" onclick="closeModal(event)" style="z-index: 10005;">
        <div class="modal-content" style="max-width: 1000px; max-height: 85vh;" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2 id="modal-title" style="margin:0; color:#0056b3;">Details</h2>
                <button class="close-btn" onclick="closeModal(true)">Close</button>
            </div>
            <div class="modal-body" id="modal-body-content"></div>
        </div>
    </div>

    <div id="raw-data-modal" class="modal-overlay" onclick="closeRawModal(event)" style="z-index: 10005;">
        <div class="modal-content" onclick="event.stopPropagation()" style="max-width: 600px;">
            <div class="modal-header">
                <h2 style="margin:0; color:#10b981;">📡 Raw Server Data</h2>
                <button class="close-btn" onclick="closeRawModal(true)">Close</button>
            </div>
            <div class="modal-body" id="raw-modal-body-content"></div>
        </div>
    </div>

    <div id="table-modal" class="modal-overlay" onclick="closeTableModal(event)">
        <div class="modal-content" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2 id="table-modal-title" style="margin:0; color:#333;">Data View</h2>
                <button class="close-btn" onclick="closeTableModal(true)">Close Data</button>
            </div>
            <div class="modal-body" id="table-modal-body">
                
                <div style="background:#e0f2fe; color:#0369a1; padding:10px; text-align:center; border-radius:6px; margin-bottom:10px; font-weight:bold;">
                    Showing the Newest Records.
                </div>

                <!-- UNSUBSCRIBES SECTION -->
                <div id="unsub-section" style="display:none;">
                    <div class="filter-bar">
                        <input type="text" id="search-unsub" placeholder="🔍 Search emails, IP, locations..." oninput="applyFiltersUnsubs()" style="width:250px; margin:0; border: 2px solid #dc3545;">
                        <strong style="font-size:0.9em; margin-left: 10px;">📅 Date:</strong>
                        <input type="date" id="start-date-unsub" onchange="applyFiltersUnsubs()" style="margin:0; width:auto; padding:5px;">
                        <span style="font-size:0.9em; color:#666;">to</span>
                        <input type="date" id="end-date-unsub" onchange="applyFiltersUnsubs()" style="margin:0; width:auto; padding:5px;">
                        <div style="margin-left:auto; display:flex; gap:5px;">
                            <button onclick="exportTableToCSV('unsub-table', 'unsubscribes.csv')" style="width:auto; background:#198754; padding:6px 12px; font-size:0.85rem;">📥 Export CSV</button>
                            <button onclick="exportEmailsToTXT('unsub-table', 'unsubscribed_emails.txt')" style="width:auto; background:#6366f1; padding:6px 12px; font-size:0.85rem;">📄 Export Emails (TXT)</button>
                        </div>
                        <span id="unsub-count" style="font-weight:bold; color:#b91c1c; background:#fee2e2; padding:6px 12px; border-radius:4px; margin-left:10px;"></span>
                    </div>
                    <div style="max-height: 600px; overflow-y: auto; border: 1px solid #eee; border-radius: 8px;">
                        <table id="unsub-table">
                            <thead><tr>
                                <th onclick="sortTable('unsub-table', 0)" style="text-align:center;"># ↕</th>
                                <th onclick="sortTable('unsub-table', 1)" style="text-align:center;">Status ↕</th>
                                <th onclick="sortTable('unsub-table', 2)">Unsubscribe Time ↕</th>
                                <th onclick="sortTable('unsub-table', 3)">User Email ↕</th>
                                <th onclick="sortTable('unsub-table', 4)">IP Address ↕</th>
                                <th onclick="sortTable('unsub-table', 5)">ISP ↕</th>
                                <th onclick="sortTable('unsub-table', 6)" style="text-align:center;">Location ↕</th>
                                <th onclick="sortTable('unsub-table', 7)">Profile ↕</th>
                                <th onclick="sortTable('unsub-table', 8)" style="text-align:center;">App / Client ↕</th> 
                            </tr></thead>
                            <tbody>${unsubsHtml}</tbody>
                        </table>
                    </div>
                    <div id="pagination-unsub-table" class="pagination-controls">
                        <button onclick="changePage('unsub-table', -1)" style="width:auto; padding: 5px 15px;">&larr; Prev</button>
                        <span id="page-info-unsub-table" style="font-weight:bold; color:#666;">Page 1</span>
                        <button onclick="changePage('unsub-table', 1)" style="width:auto; padding: 5px 15px;">Next &rarr;</button>
                    </div>
                </div>

                <!-- OPENS SECTION -->
                <div id="opens-section" style="display:none;">
                    <div class="filter-bar">
                        <input type="text" id="search-opens" placeholder="🔍 Search emails, IP, locations..." oninput="applyFiltersOpens()" style="width:250px; margin:0; border: 2px solid #007bff;">
                        <strong style="font-size:0.9em; margin-left: 10px;">🤖 Status:</strong>
                        <select id="bot-filter-opens" onchange="applyFiltersOpens()" multiple style="margin:0; width:auto; padding:5px; border-color:#007bff; color:#007bff; font-weight:bold;">
                            <option value="ALL" selected>All Traffic</option>
                            <option value="HUMAN">👤 Humans Only</option>
                            <option value="BOT">🤖 Bots Only</option>
                        </select>
                        <strong style="font-size:0.9em; margin-left: 10px;">📅 Date:</strong>
                        <input type="date" id="start-date-opens" onchange="applyFiltersOpens()" style="margin:0; width:auto; padding:5px;">
                        <span style="font-size:0.9em; color:#666;">to</span>
                        <input type="date" id="end-date-opens" onchange="applyFiltersOpens()" style="margin:0; width:auto; padding:5px;">
                        <strong style="font-size:0.9em; margin-left: 10px;">📍 Country:</strong>
                        <select id="country-filter-opens" onchange="applyFiltersOpens()" multiple style="margin:0; width:auto; padding:5px;">
                            <option value="ALL" selected>All Countries</option>
                            ${countryOptionsHtml}
                        </select>
                        <strong style="font-size:0.9em; margin-left: 10px;">👤 Profile:</strong>
                        <select id="profile-filter" onchange="applyFiltersOpens()" multiple style="margin:0; width:auto; padding:5px;">
                            <option value="ALL" selected>All Profiles</option>
                            ${profileOptionsHtml}
                        </select>
                        <div style="margin-left:auto; display:flex; gap:5px;">
                            <button onclick="exportTableToCSV('opens-table', 'crm_data.csv')" style="width:auto; background:#198754; padding:6px 12px; font-size:0.85rem;">📥 Export CSV</button>
                            <button onclick="exportEmailsToTXT('opens-table', 'opens_emails.txt')" style="width:auto; background:#6366f1; padding:6px 12px; font-size:0.85rem;">📄 Export Emails (TXT)</button>
                        </div>
                        <span id="opens-count" style="font-weight:bold; color:#0ea5e9; background:#e0f2fe; padding:6px 12px; border-radius:4px; margin-left:10px;"></span>
                    </div>
                    <div style="max-height: 600px; overflow-y: auto; border: 1px solid #eee; border-radius: 8px;">
                        <table id="opens-table">
                            <thead><tr>
                                <th onclick="sortTable('opens-table', 0)" style="text-align:center;"># ↕</th>
                                <th onclick="sortTable('opens-table', 1)" style="text-align:center;">Status ↕</th>
                                <th onclick="sortTable('opens-table', 2)">Latest Open ↕</th>
                                <th onclick="sortTable('opens-table', 3)">User Email ↕</th>
                                <th onclick="sortTable('opens-table', 4)">IP Address ↕</th>
                                <th onclick="sortTable('opens-table', 5)">ISP ↕</th>
                                <th onclick="sortTable('opens-table', 6)" style="text-align:center;">Total Opens ↕</th>
                                <th onclick="sortTable('opens-table', 7)" style="text-align:center;">Total Clicks ↕</th>
                                <th onclick="sortTable('opens-table', 8)" style="text-align:center;">Open Loc ↕</th>
                                <th onclick="sortTable('opens-table', 9)" style="text-align:center;">Click Loc ↕</th>
                                <th onclick="sortTable('opens-table', 10)">Profile ↕</th>
                                <th onclick="sortTable('opens-table', 11)" style="text-align:center;">App / Client ↕</th> 
                            </tr></thead>
                            <tbody>${openersHtml}</tbody>
                        </table>
                    </div>
                    <div id="pagination-opens-table" class="pagination-controls">
                        <button onclick="changePage('opens-table', -1)" style="width:auto; padding: 5px 15px;">&larr; Prev</button>
                        <span id="page-info-opens-table" style="font-weight:bold; color:#666;">Page 1</span>
                        <button onclick="changePage('opens-table', 1)" style="width:auto; padding: 5px 15px;">Next &rarr;</button>
                    </div>
                </div>

                <!-- CLICKS SECTION -->
                <div id="all-clicks-section" style="display:none;">
                    <div class="filter-bar">
                        <input type="text" id="search-all-clicks" placeholder="🔍 Search emails, IP, locations..." oninput="applyFiltersAllClicks()" style="width:250px; margin:0; border: 2px solid #007bff;">
                        <strong style="font-size:0.9em; margin-left: 10px;">🤖 Status:</strong>
                        <select id="bot-filter-all-clicks" onchange="applyFiltersAllClicks()" multiple style="margin:0; width:auto; padding:5px; border-color:#007bff; color:#007bff; font-weight:bold;">
                            <option value="ALL" selected>All Traffic</option>
                            <option value="HUMAN">👤 Humans Only</option>
                            <option value="BOT">🤖 Bots Only</option>
                        </select>
                        <strong style="font-size:0.9em; margin-left: 10px;">📅 Date:</strong>
                        <input type="date" id="start-date-all-clicks" onchange="applyFiltersAllClicks()" style="margin:0; width:auto; padding:5px;">
                        <span style="font-size:0.9em; color:#666;">to</span>
                        <input type="date" id="end-date-all-clicks" onchange="applyFiltersAllClicks()" style="margin:0; width:auto; padding:5px;">
                        <strong style="font-size:0.9em; margin-left: 10px;">📍 Country:</strong>
                        <select id="country-filter-all-clicks" onchange="applyFiltersAllClicks()" multiple style="margin:0; width:auto; padding:5px;">
                            <option value="ALL" selected>All Countries</option>
                            ${countryOptionsHtml}
                        </select>
                        <div style="margin-left:auto; display:flex; gap:5px;">
                            <button onclick="exportTableToCSV('all-clicks-table', 'all_clicks_data.csv')" style="width:auto; background:#198754; padding:6px 12px; font-size:0.85rem;">📥 Export CSV</button>
                            <button onclick="exportEmailsToTXT('all-clicks-table', 'clicks_emails.txt')" style="width:auto; background:#6366f1; padding:6px 12px; font-size:0.85rem;">📄 Export Emails (TXT)</button>
                        </div>
                        <span id="all-clicks-count" style="font-weight:bold; color:#0ea5e9; background:#e0f2fe; padding:6px 12px; border-radius:4px; margin-left:10px;"></span>
                    </div>
                    <div style="max-height: 600px; overflow-y: auto; border: 1px solid #eee; border-radius: 8px;">
                        <table id="all-clicks-table">
                            <thead><tr>
                                <th onclick="sortTable('all-clicks-table', 0)" style="text-align:center;"># ↕</th>
                                <th onclick="sortTable('all-clicks-table', 1)" style="text-align:center;">Status ↕</th>
                                <th onclick="sortTable('all-clicks-table', 2)">Latest Click Time ↕</th>
                                <th onclick="sortTable('all-clicks-table', 3)">Latest Link ↕</th>
                                <th onclick="sortTable('all-clicks-table', 4)">User Email ↕</th>
                                <th onclick="sortTable('all-clicks-table', 5)">IP Address ↕</th>
                                <th onclick="sortTable('all-clicks-table', 6)">ISP ↕</th>
                                <th onclick="sortTable('all-clicks-table', 7)" style="text-align:center;">Total Opens ↕</th>
                                <th onclick="sortTable('all-clicks-table', 8)" style="text-align:center;">Total Clicks ↕</th>
                                <th onclick="sortTable('all-clicks-table', 9)" style="text-align:center;">Location ↕</th>
                                <th onclick="sortTable('all-clicks-table', 10)" style="text-align:center;">App / Client ↕</th> 
                            </tr></thead>
                            <tbody>${allClicksHtml}</tbody>
                        </table>
                    </div>
                    <div id="pagination-all-clicks-table" class="pagination-controls">
                        <button onclick="changePage('all-clicks-table', -1)" style="width:auto; padding: 5px 15px;">&larr; Prev</button>
                        <span id="page-info-all-clicks-table" style="font-weight:bold; color:#666;">Page 1</span>
                        <button onclick="changePage('all-clicks-table', 1)" style="width:auto; padding: 5px 15px;">Next &rarr;</button>
                    </div>
                </div>

                <!-- GLOBAL SECTION -->
                <div id="global-section" style="display:none;">
                    <div class="filter-bar">
                        <input type="text" id="search-global" placeholder="🔍 Search emails, IP, locations..." oninput="applyFiltersGlobal()" style="width:250px; margin:0; border: 2px solid #007bff;">
                        <strong style="font-size:0.9em; margin-left: 10px;">🤖 Status:</strong>
                        <select id="bot-filter-global" onchange="applyFiltersGlobal()" multiple style="margin:0; width:auto; padding:5px; border-color:#007bff; color:#007bff; font-weight:bold;">
                            <option value="ALL" selected>All Traffic</option>
                            <option value="HUMAN">👤 Humans Only</option>
                            <option value="BOT">🤖 Bots Only</option>
                        </select>
                        <strong style="font-size:0.9em; margin-left: 10px;">📅 Date:</strong>
                        <input type="date" id="start-date-global" onchange="applyFiltersGlobal()" style="margin:0; width:auto; padding:5px;">
                        <span style="font-size:0.9em; color:#666;">to</span>
                        <input type="date" id="end-date-global" onchange="applyFiltersGlobal()" style="margin:0; width:auto; padding:5px;">
                        <strong style="font-size:0.9em; margin-left: 10px;">📍 Country:</strong>
                        <select id="country-filter-global" onchange="applyFiltersGlobal()" multiple style="margin:0; width:auto; padding:5px;">
                            <option value="ALL" selected>All Countries</option>
                            ${countryOptionsHtml}
                        </select>
                        <strong style="font-size:0.9em; margin-left: 10px;">🔍 Type:</strong>
                        <select id="type-filter" onchange="applyFiltersGlobal()" multiple style="margin:0; width:auto; padding:5px;">
                            <option value="ALL" selected>All Events</option>
                            <option value="Open">Opens Only</option>
                            <option value="Click">Clicks Only</option>
                        </select>
                        <div style="margin-left:auto; display:flex; gap:5px;">
                            <button onclick="exportTableToCSV('global-table', 'smart_leads.csv')" style="width:auto; background:#198754; padding:6px 12px; font-size:0.85rem;">📥 Export CSV</button>
                            <button onclick="exportEmailsToTXT('global-table', 'leads_emails.txt')" style="width:auto; background:#6366f1; padding:6px 12px; font-size:0.85rem;">📄 Export Emails (TXT)</button>
                        </div>
                        <span id="global-count" style="font-weight:bold; color:#0ea5e9; background:#e0f2fe; padding:6px 12px; border-radius:4px; margin-left:10px;"></span>
                    </div>
                    <div style="max-height: 700px; overflow-y: auto; border: 1px solid #eee; border-radius: 8px;">
                        <table id="global-table">
                            <thead><tr>
                                <th onclick="sortTable('global-table', 0)" style="text-align:center;"># ↕</th>
                                <th onclick="sortTable('global-table', 1)" style="text-align:center;">Status ↕</th>
                                <th onclick="sortTable('global-table', 2)">Latest Time ↕</th>
                                <th onclick="sortTable('global-table', 3)">User Email ↕</th>
                                <th onclick="sortTable('global-table', 4)">IP Address ↕</th>
                                <th onclick="sortTable('global-table', 5)">ISP ↕</th>
                                <th onclick="sortTable('global-table', 6)" style="text-align:center;">Total Opens ↕</th>
                                <th onclick="sortTable('global-table', 7)" style="text-align:center;">Total Clicks ↕</th>
                                <th onclick="sortTable('global-table', 8)">Latest Action ↕</th>
                                <th onclick="sortTable('global-table', 9)" style="text-align:center;">Location ↕</th>
                                <th onclick="sortTable('global-table', 10)" style="text-align:center;">App / Client ↕</th> 
                            </tr></thead>
                            <tbody>${globalHtml}</tbody>
                        </table>
                    </div>
                    <div id="pagination-global-table" class="pagination-controls">
                        <button onclick="changePage('global-table', -1)" style="width:auto; padding: 5px 15px;">&larr; Prev</button>
                        <span id="page-info-global-table" style="font-weight:bold; color:#666;">Page 1</span>
                        <button onclick="changePage('global-table', 1)" style="width:auto; padding: 5px 15px;">Next &rarr;</button>
                    </div>
                </div>

                <!-- CHARTS SECTION -->
                <div id="charts-section" style="display:none;">
                    <div class="filter-bar">
                        <strong style="font-size:0.9em;">🤖 Status:</strong>
                        <select id="bot-filter-charts" multiple style="margin:0; width:auto; padding:5px; border-color:#007bff; color:#007bff; font-weight:bold;">
                            <option value="ALL" selected>All Traffic</option>
                            <option value="HUMAN">👤 Humans Only</option>
                            <option value="BOT">🤖 Bots Only</option>
                        </select>
                        <strong style="font-size:0.9em; margin-left: 10px;">📅 Date:</strong>
                        <input type="date" id="start-date-charts" style="margin:0; width:auto; padding:5px;">
                        <span style="font-size:0.9em; color:#666;">to</span>
                        <input type="date" id="end-date-charts" style="margin:0; width:auto; padding:5px;">
                        <strong style="font-size:0.9em; margin-left: 10px;">📍 Country:</strong>
                        <select id="country-filter-charts" multiple style="margin:0; width:auto; padding:5px;">
                            <option value="ALL" selected>All Countries</option>
                            ${countryOptionsHtml}
                        </select>
                        <strong style="font-size:0.9em; margin-left: 10px;">👤 Profile:</strong>
                        <select id="profile-filter-charts" multiple style="margin:0; width:auto; padding:5px;">
                            <option value="ALL" selected>All Profiles</option>
                            ${profileOptionsHtml}
                        </select>
                        <button onclick="updateGlobalCharts()" style="width:auto; padding:6px 12px; font-size:0.85rem;">Apply Filters</button>
                    </div>
                    <div class="charts-grid">
                        <div class="card" style="background:#fff; padding:1.5rem; border-radius:8px; border:1px solid #eee;">
                            <h3 style="margin-top:0; text-align:center;">Total Opens by Country</h3>
                            <div class="chart-container"><canvas id="globalOpensChart"></canvas></div>
                        </div>
                        <div class="card" style="background:#fff; padding:1.5rem; border-radius:8px; border:1px solid #eee;">
                            <h3 style="margin-top:0; text-align:center;">Total Clicks by Country</h3>
                            <div class="chart-container"><canvas id="globalClicksChart"></canvas></div>
                        </div>
                        <div class="card" style="background:#fff; padding:1.5rem; border-radius:8px; border:1px solid #eee; grid-column: 1 / -1;">
                            <h3 style="margin-top:0; text-align:center;">Clicks by Device OS</h3>
                            <div class="chart-container"><canvas id="globalDevicesChart"></canvas></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div class="container">
        
        <div style="display:flex; justify-content:space-between; align-items:center; width:100%; margin-bottom:1rem;">
            <h1 style="margin:0;">Marketing Engine</h1>
            <button onclick="clearAllLogs()" style="width:auto; background:#dc3545; padding:8px 16px;">🗑️ Clear All Logs</button>
        </div>

        <div class="summary-box">
            <div class="stat"><div class="stat-value">${totalLinks}</div><div class="stat-label">Active Links</div></div>
            <div class="stat clickable-stat" onclick="openTableModal('all-clicks-section', 'Master Clicks Feed', 'ALL')"><div class="stat-value">${totalClicks}</div><div class="stat-label">Total Clicks</div></div>
            <div class="stat clickable-stat" onclick="openTableModal('all-clicks-section', 'Master Clicks Feed', 'ALL')"><div class="stat-value" style="color:#20c997;">${uniqueClicks}</div><div class="stat-label">Unique Clicks</div></div>
            <div class="stat clickable-stat" onclick="openTableModal('opens-section', 'User Engagement CRM', 'ALL')"><div class="stat-value">${totalOpens}</div><div class="stat-label">Total Opens</div></div>
            <div class="stat clickable-stat" onclick="openTableModal('global-section', 'Smart Lead Stream', 'ALL')"><div class="stat-value">${trueUniqueUsers}</div><div class="stat-label">Unique Active Users</div></div>
            <div class="stat clickable-stat" style="border-left: 2px solid #eee;" onclick="openTableModal('unsub-section', 'Unsubscribed Users', 'ALL')"><div class="stat-value" style="color:#dc3545;">${totalUnsubscribes}</div><div class="stat-label" style="font-weight:bold;">Unsubscribed</div></div>
            <div class="stat clickable-stat" style="border-left: 2px solid #eee;" onclick="openTableModal('opens-section', 'Bot Opens List', 'BOT')"><div class="stat-value" style="color:#dc3545;">${totalBotOpens}</div><div class="stat-label">Bot Opens</div></div>
            <div class="stat clickable-stat" onclick="openTableModal('global-section', 'Bot Unique Leads', 'BOT')"><div class="stat-value" style="color:#dc3545;">${uniqueBotOpens}</div><div class="stat-label">Unique Bot Opens</div></div>
            <div class="stat clickable-stat" onclick="openTableModal('all-clicks-section', 'Bot Clicks Feed', 'BOT')"><div class="stat-value" style="color:#dc3545;">${totalBotClicks}</div><div class="stat-label">Bot Clicks</div></div>
            <div class="stat clickable-stat" onclick="openTableModal('all-clicks-section', 'Bot Unique Clicks', 'BOT')"><div class="stat-value" style="color:#dc3545;">${uniqueBotClicks}</div><div class="stat-label">Unique Bot Clicks</div></div>
            <div class="stat clickable-stat" style="border-left: 2px solid #eee;" onclick="openTableModal('charts-section', 'Global Charts', 'ALL')"><div class="stat-value">📊</div><div class="stat-label" style="color:#007bff; font-weight:bold;">View Charts</div></div>
        </div>

        <div id="links" style="width: 100%;">
            <form id="shorten-form" style="background:#f8f9fa; padding:1.5rem; border-radius:8px; margin-bottom:2rem;">
                <h3>Create New Trackable Link</h3>
                <input type="url" id="long-url" required placeholder="Destination URL (e.g., https://example.com)">
                <input type="text" id="custom-code" placeholder="Custom Short Code (Optional)">
                
                <label style="font-weight:bold; font-size:0.9em; display:block; margin-bottom:5px;">🛡️ Target Countries (Select one or multiple):</label>
                <div class="country-select-box">
                    <input type="text" id="country-search-input" class="country-search-input" placeholder="🔍 Search country name or code..." oninput="filterCountryCheckboxes()">
                    <div class="country-checkbox-grid">
                        <label class="country-item"><input type="checkbox" name="country-check" value="ALL" checked onchange="handleAllToggle(this)"> 🌐 ALL (Global Traffic - No Filter)</label>
                        ${allCountryCheckboxesHtml}
                    </div>
                </div>
                <small style="color:#666; display:block; margin-bottom:15px;">Visitors outside selected countries will be redirected to Google and logged as Bots.</small>

                <button type="submit" id="submit-btn">Shorten URL</button>
            </form>
            <h3>Your Links</h3>
            ${linksHtml}
        </div>

    </div>
    <script>
        const ITEMS_PER_PAGE = 1000;
        const paginationState = {
            'all-clicks-table': { page: 1, limit: ITEMS_PER_PAGE, rows: [], isFilteringActive: false },
            'opens-table': { page: 1, limit: ITEMS_PER_PAGE, rows: [], isFilteringActive: false },
            'global-table': { page: 1, limit: ITEMS_PER_PAGE, rows: [], isFilteringActive: false },
            'unsub-table': { page: 1, limit: ITEMS_PER_PAGE, rows: [], isFilteringActive: false }
        };

        function filterCountryCheckboxes() {
            const q = document.getElementById('country-search-input').value.toLowerCase().trim();
            document.querySelectorAll('.country-item').forEach(el => {
                const txt = el.innerText.toLowerCase();
                el.style.display = txt.includes(q) ? 'flex' : 'none';
            });
        }

        function handleAllToggle(el) {
            if (el.checked) {
                document.querySelectorAll('input[name="country-check"]').forEach(cb => {
                    if (cb.value !== 'ALL') cb.checked = false;
                });
            }
        }

        function handleIndividualToggle(el) {
            if (el.checked) {
                const allCb = document.querySelector('input[name="country-check"][value="ALL"]');
                if (allCb) allCb.checked = false;
            }
        }

        function openTableModal(sectionId, titleText, autoFilterType) {
            document.getElementById('table-modal-title').innerText = titleText;
            document.getElementById('opens-section').style.display = 'none';
            document.getElementById('all-clicks-section').style.display = 'none';
            document.getElementById('global-section').style.display = 'none';
            document.getElementById('charts-section').style.display = 'none';
            document.getElementById('unsub-section').style.display = 'none';
            
            document.getElementById(sectionId).style.display = 'block';
            document.getElementById('table-modal').style.display = 'flex';

            let filterId = '';
            if (sectionId === 'opens-section') filterId = 'bot-filter-opens';
            if (sectionId === 'all-clicks-section') filterId = 'bot-filter-all-clicks';
            if (sectionId === 'global-section') filterId = 'bot-filter-global';

            if (filterId) {
                const select = document.getElementById(filterId);
                const targetValue = autoFilterType ? autoFilterType : 'ALL';
                for (let i = 0; i < select.options.length; i++) select.options[i].selected = (select.options[i].value === targetValue);
                if (sectionId === 'opens-section') applyFiltersOpens();
                if (sectionId === 'all-clicks-section') applyFiltersAllClicks();
                if (sectionId === 'global-section') applyFiltersGlobal();
            }

            if (sectionId === 'unsub-section') applyFiltersUnsubs();
            if (sectionId === 'charts-section') updateGlobalCharts();
        }

        function closeTableModal(force) {
            if (force === true || force.target === document.getElementById('table-modal')) {
                document.getElementById('table-modal').style.display = 'none';
            }
        }

        function showRawData(event, label, ua, asn) {
            event.stopPropagation();
            const body = document.getElementById('raw-modal-body-content');
            const modal = document.getElementById('raw-data-modal');
            body.innerHTML = \`<div style="background:#1e293b; color:#10b981; font-family:monospace; padding:15px; border-radius:8px; overflow-wrap: break-word;">
                <p style="margin:0 0 10px 0; color:#cbd5e1;">// THIS IS EXACTLY WHAT THE DEVICE SENT TO YOUR SERVER</p>
                <p style="margin:0 0 5px 0;"><strong>Detected Label:</strong> \${label}</p>
                <p style="margin:0 0 5px 0;"><strong>Provider ASN:</strong> \${asn}</p>
                <p style="margin:0 0 5px 0;"><strong>Raw User-Agent:</strong><br>\${ua}</p>
            </div>\`;
            modal.style.display = 'flex';
        }

        function closeRawModal(force) {
            if (force === true || force.target === document.getElementById('raw-data-modal')) document.getElementById('raw-data-modal').style.display = 'none';
        }

        function getUIBadgeClient(label, rawUA, rawASN) {
            let style = "";
            if (!label || label === 'null') { label = '👤 Human ✓'; style = "color:#28a745; font-weight:bold; font-size:0.85em; cursor:pointer;"; }
            else if (label.includes('Apple')) style = "background:#f3f4f6; color:#374151; border: 1px solid #d1d5db; padding:2px 6px; border-radius:4px; font-size:0.75em; white-space:nowrap; cursor:pointer;";
            else if (label.includes('Gmail')) style = "background:#fee2e2; color:#b91c1c; border: 1px solid #fca5a5; padding:2px 6px; border-radius:4px; font-size:0.75em; white-space:nowrap; cursor:pointer;";
            else if (label.includes('Yahoo')) style = "background:#f3e8ff; color:#7e22ce; border: 1px solid #d8b4fe; padding:2px 6px; border-radius:4px; font-size:0.75em; white-space:nowrap; cursor:pointer;";
            else if (label.includes('Scanner') || label.includes('Crawler') || label.includes('Trap') || label.includes('Geo-Blocked')) style = "background:#fecaca; color:#991b1b; padding:2px 6px; border-radius:4px; font-size:0.75em; white-space:nowrap; cursor:pointer;";
            else style = "background:#e0f2fe; color:#0369a1; border: 1px solid #bae6fd; padding:2px 6px; border-radius:4px; font-size:0.75em; white-space:nowrap; cursor:pointer;";
            const safeUA = (rawUA || 'Unknown').replace(/'/g, "&#39;").replace(/"/g, "&quot;");
            const safeLabel = (label || 'Unknown').replace(/'/g, "&#39;").replace(/"/g, "&quot;");
            return \`<span style="\${style}" onclick="showRawData(event, '\${safeLabel}', '\${safeUA}', '\${rawASN}')" title="Click to view Raw Request Data">\${label}</span>\`;
        }

        const rawOpensData = ${JSON.stringify(rawOpensSafe)};
        const rawClicksData = ${JSON.stringify(rawClicksSafe)};

        function openDetailsModal(type, email) {
            const title = document.getElementById('modal-title');
            const body = document.getElementById('modal-body-content');
            const modal = document.getElementById('details-modal');
            title.innerText = (type === 'open' ? '👁️ Open History' : '🖱️ Click History') + ' for ' + email;
            
            let html = '<table style="width:100%; border-collapse:collapse; text-align:left; font-size: 0.95em;">';
            html += '<thead><tr><th style="padding:10px; border-bottom:2px solid #ddd; background:#f8f9fa;">Time</th><th style="padding:10px; border-bottom:2px solid #ddd; background:#f8f9fa;">IP Address</th><th style="padding:10px; border-bottom:2px solid #ddd; background:#f8f9fa;">ISP</th><th style="padding:10px; border-bottom:2px solid #ddd; background:#f8f9fa;">Location</th><th style="padding:10px; border-bottom:2px solid #ddd; background:#f8f9fa;">App / Client</th><th style="padding:10px; border-bottom:2px solid #ddd; background:#f8f9fa; text-align:center;">Status</th></tr></thead><tbody>';
            
            const dataSource = type === 'open' ? rawOpensData : rawClicksData;
            const filtered = dataSource.filter(d => d.email && d.email.trim().toLowerCase() === email.trim().toLowerCase()).sort((a,b) => new Date(b.date) - new Date(a.date));
            
            if (filtered.length === 0) { html += '<tr><td colspan="6" style="text-align:center; padding:15px;">No data found.</td></tr>'; } 
            else {
                filtered.forEach(d => {
                    const date = new Date(d.date).toLocaleString('en-US', { timeZone: 'America/New_York' });
                    const trStyle = d.isBot ? "background: #fff0f0;" : "";
                    const statusBadge = d.isBot ? '<span style="color:#dc3545; font-weight:bold;">🤖 Bot</span>' : '<span style="color:#28a745; font-weight:bold;">👤 Human</span>';
                    const clientBadge = getUIBadgeClient(d.bot_reason, d.raw_ua, d.raw_asn);
                    
                    html += \`<tr style="\${trStyle}">
                        <td style="padding:10px; border-bottom:1px solid #eee;">\${date}</td>
                        <td style="padding:10px; border-bottom:1px solid #eee; font-family:monospace; color:#64748b;">\${d.ip || '-'}</td>
                        <td style="padding:10px; border-bottom:1px solid #eee; font-size:0.85em; color:#475569;">\${d.isp || '-'}</td>
                        <td style="padding:10px; border-bottom:1px solid #eee; font-weight:500;">\${d.country || '-'}</td>
                        <td style="padding:10px; border-bottom:1px solid #eee;">\${clientBadge}</td>
                        <td style="padding:10px; border-bottom:1px solid #eee; text-align:center;">\${statusBadge}</td>
                    </tr>\`;
                });
            }
            html += '</tbody></table>';
            body.innerHTML = html;
            modal.style.display = 'flex';
        }

        function closeModal(force) {
            if (force === true || force.target === document.getElementById('details-modal')) document.getElementById('details-modal').style.display = 'none';
        }

        function changePage(tableId, dir) {
            const state = paginationState[tableId];
            if (state.isFilteringActive) return; 
            const maxPage = Math.ceil(state.rows.length / state.limit) || 1;
            state.page += dir;
            if (state.page < 1) state.page = 1;
            if (state.page > maxPage) state.page = maxPage;
            renderPage(tableId);
        }

        function renderPage(tableId) {
            const state = paginationState[tableId];
            const paginationContainer = document.getElementById('pagination-' + tableId);
            state.rows.forEach(r => r.style.display = 'none');
            const fallbackRow = document.querySelector('#' + tableId + ' tbody tr td[colspan]');
            if (state.rows.length === 0) {
                if(fallbackRow) fallbackRow.parentElement.style.display = '';
                if(paginationContainer) paginationContainer.style.display = 'none';
                return;
            }
            if(fallbackRow) fallbackRow.parentElement.style.display = 'none';

            if (state.isFilteringActive) {
                state.rows.forEach(r => r.style.display = '');
                if(paginationContainer) paginationContainer.style.display = 'none';
            } else {
                const start = (state.page - 1) * state.limit; const end = start + state.limit;
                state.rows.slice(start, end).forEach(r => r.style.display = '');
                if(paginationContainer) paginationContainer.style.display = 'flex';
                const infoEl = document.getElementById('page-info-' + tableId);
                if (infoEl) infoEl.innerText = \`Page \${state.page} of \${Math.ceil(state.rows.length / state.limit) || 1}\`;
            }
        }

        let opensChart, clicksChart, devicesChart;
        function updateGlobalCharts() {
            const start = document.getElementById('start-date-charts').value; const end = document.getElementById('end-date-charts').value;
            const getSelected = (id) => { const el = document.getElementById(id); return el && el.selectedOptions.length > 0 ? Array.from(el.selectedOptions).map(o => o.value) : ['ALL']; };
            const countryFilter = getSelected('country-filter-charts'), profileFilter = getSelected('profile-filter-charts'), botFilter = getSelected('bot-filter-charts');
            const startObj = start ? new Date(start) : new Date('2000-01-01'); startObj.setHours(0,0,0,0);
            const endObj = end ? new Date(end) : new Date('2100-01-01'); endObj.setHours(23,59,59,999);

            const checkFilters = (d) => {
                const date = new Date(d.date); if (date < startObj || date > endObj) return false;
                if (!countryFilter.includes('ALL') && !countryFilter.includes(d.country)) return false;
                if (!profileFilter.includes('ALL') && !profileFilter.includes(d.profile)) return false;
                if (!botFilter.includes('ALL')) { let botMatch = false; if (botFilter.includes('HUMAN') && !d.isBot) botMatch = true; if (botFilter.includes('BOT') && d.isBot) botMatch = true; if (!botMatch) return false; }
                return true;
            };

            const filteredOpens = rawOpensData.filter(checkFilters); const filteredClicks = rawClicksData.filter(checkFilters);
            const opensByCountry = {}; filteredOpens.forEach(o => opensByCountry[o.country] = (opensByCountry[o.country]||0) + 1);
            const clicksByCountry = {}; const clicksByDevice = {};
            filteredClicks.forEach(c => { clicksByCountry[c.country] = (clicksByCountry[c.country]||0) + 1; clicksByDevice[c.os] = (clicksByDevice[c.os]||0) + 1; });

            const genColors = (c) => Array.from({length: c}, (_, i) => ['#007bff','#28a745','#ffc107','#dc3545','#6f42c1','#fd7e14','#20c997','#e83e8c'][i % 8]);

            if(opensChart) opensChart.destroy();
            opensChart = new Chart(document.getElementById('globalOpensChart'), { type: 'doughnut', data: { labels: Object.keys(opensByCountry).length ? Object.keys(opensByCountry) : ['No Data'], datasets: [{ data: Object.keys(opensByCountry).length ? Object.values(opensByCountry) : [1], backgroundColor: Object.keys(opensByCountry).length ? genColors(Object.keys(opensByCountry).length) : ['#e0e0e0'] }] }, options: { responsive: true, maintainAspectRatio: false }});

            if(clicksChart) clicksChart.destroy();
            clicksChart = new Chart(document.getElementById('globalClicksChart'), { type: 'doughnut', data: { labels: Object.keys(clicksByCountry).length ? Object.keys(clicksByCountry) : ['No Data'], datasets: [{ data: Object.keys(clicksByCountry).length ? Object.values(clicksByCountry) : [1], backgroundColor: Object.keys(clicksByCountry).length ? genColors(Object.keys(clicksByCountry).length) : ['#e0e0e0'] }] }, options: { responsive: true, maintainAspectRatio: false }});

            if(devicesChart) devicesChart.destroy();
            devicesChart = new Chart(document.getElementById('globalDevicesChart'), { type: 'bar', data: { labels: Object.keys(clicksByDevice).length ? Object.keys(clicksByDevice) : ['No Data'], datasets: [{ label: 'Clicks', data: Object.keys(clicksByDevice).length ? Object.values(clicksByDevice) : [0], backgroundColor: '#007bff' }] }, options: { responsive: true, maintainAspectRatio: false }});
        }

        window.addEventListener('DOMContentLoaded', () => { applyFiltersOpens(); applyFiltersGlobal(); applyFiltersAllClicks(); applyFiltersUnsubs(); });

        function showToast(msg) { const t = document.getElementById("toast"); t.textContent = msg; t.className = "show"; setTimeout(() => t.className = t.className.replace("show", ""), 3000); }
        function copyToClipboard(text) { navigator.clipboard.writeText(text).then(() => showToast("Copied!")).catch(() => showToast("Failed to copy.")); }
        
        document.getElementById("shorten-form").addEventListener("submit", async e => {
            e.preventDefault(); const btn = document.getElementById("submit-btn"); btn.textContent = "Creating..."; btn.disabled = true;
            
            const selectedCountries = Array.from(document.querySelectorAll('input[name="country-check"]:checked')).map(cb => cb.value);
            if (selectedCountries.length === 0) selectedCountries.push('ALL');

            try {
                const res = await fetch("${SECRET_DASHBOARD_PATH}", { 
                    method: "POST", 
                    headers: {"Content-Type": "application/json"}, 
                    body: JSON.stringify({ 
                        longUrl: document.getElementById("long-url").value, 
                        customCode: document.getElementById("custom-code").value,
                        allowedCountries: selectedCountries
                    }) 
                });
                if(res.ok) { showToast("Link created! 🎉"); setTimeout(() => window.location.reload(), 1000); }
                else { const data = await res.json(); showToast("Error: " + (data.error || "Unknown")); }
            } catch(err) { showToast("Network error."); }
            btn.textContent = "Shorten URL"; btn.disabled = false;
        });

        async function deleteLink(code) { if(!confirm("Permanently delete link?")) return; try { const res = await fetch(\`/api/links/\${code}\`, {method: "DELETE"}); if(res.ok) window.location.reload(); else showToast("Failed."); } catch(e) { showToast("Error."); } }

        async function clearAllLogs() {
            const pwd = prompt("Enter password to clear ALL tracking data (including unsubscribes):");
            if (pwd !== 'password' && pwd !== 'pasword') { if (pwd !== null) showToast("Incorrect password!"); return; }
            try {
                const res = await fetch('/api/logs', { method: 'DELETE', headers: { 'x-tracking-secret': 'eygirl-secret-key-2026' }});
                if(res.ok) { showToast("All data wiped!"); setTimeout(() => window.location.reload(), 1000); } else { showToast("Failed to clear data."); }
            } catch(e) { showToast("Error clearing logs."); }
        }

        function filterGenericTable(tableId, startInput, endInput, countryInput, botInput, searchInput, profileInput = null, typeInput = null, countId = null) {
            const start = document.getElementById(startInput).value; const end = document.getElementById(endInput).value; const searchVal = document.getElementById(searchInput).value.toLowerCase();
            const getSelected = (id) => { const el = document.getElementById(id); return el && el.selectedOptions.length > 0 ? Array.from(el.selectedOptions).map(o => o.value) : ['ALL']; };
            const countryFilter = getSelected(countryInput); const botFilter = botInput ? getSelected(botInput) : ['ALL']; const profileFilter = getSelected(profileInput); const typeFilter = getSelected(typeInput);
            const startObj = start ? new Date(start) : new Date('2000-01-01'); startObj.setHours(0,0,0,0); const endObj = end ? new Date(end) : new Date('2100-01-01'); endObj.setHours(23,59,59,999);

            const isFilteringActive = (start !== '') || (end !== '') || (!countryFilter.includes('ALL')) || (!botFilter.includes('ALL')) || (searchVal !== '') || (!profileFilter.includes('ALL')) || (!typeFilter.includes('ALL'));
            const matchingRows = [];
            
            document.querySelectorAll('#' + tableId + ' tbody tr').forEach(row => {
                if (row.cells.length === 1) { row.style.display = 'none'; return; } 
                row.style.display = 'none';
                const dateStr = row.getAttribute('data-date'); const rowProfile = row.getAttribute('data-profile'); const rowCountry = row.getAttribute('data-country'); const rowIsBot = row.getAttribute('data-isbot'); const rowType = row.getAttribute('data-type');
                if(!dateStr) return;
                
                const rowDate = new Date(dateStr);
                const matchesDate = (rowDate >= startObj && rowDate <= endObj);
                const matchesProfile = profileFilter.includes('ALL') || profileFilter.includes(rowProfile);
                const matchesCountry = countryFilter.includes('ALL') || countryFilter.includes(rowCountry);
                const matchesType = typeFilter.includes('ALL') || typeFilter.includes(rowType);
                const matchesSearch = searchVal === '' || row.innerText.toLowerCase().includes(searchVal);
                
                let matchesBot = false;
                if (botFilter.includes('ALL')) matchesBot = true;
                else { if (botFilter.includes('HUMAN') && rowIsBot === 'false') matchesBot = true; if (botFilter.includes('BOT') && rowIsBot === 'true') matchesBot = true; }

                if (matchesDate && matchesProfile && matchesCountry && matchesBot && matchesType && matchesSearch) matchingRows.push(row);
            });

            paginationState[tableId].rows = matchingRows; paginationState[tableId].page = 1; paginationState[tableId].isFilteringActive = isFilteringActive; renderPage(tableId);
            if (countId) document.getElementById(countId).innerText = 'Total matching: ' + matchingRows.length;
        }

        function applyFiltersOpens() { filterGenericTable('opens-table', 'start-date-opens', 'end-date-opens', 'country-filter-opens', 'bot-filter-opens', 'search-opens', 'profile-filter', null, 'opens-count'); }
        function applyFiltersGlobal() { filterGenericTable('global-table', 'start-date-global', 'end-date-global', 'country-filter-global', 'bot-filter-global', 'search-global', null, 'type-filter', 'global-count'); }
        function applyFiltersAllClicks() { filterGenericTable('all-clicks-table', 'start-date-all-clicks', 'end-date-all-clicks', 'country-filter-all-clicks', 'bot-filter-all-clicks', 'search-all-clicks', null, null, 'all-clicks-count'); }
        function applyFiltersUnsubs() { filterGenericTable('unsub-table', 'start-date-unsub', 'end-date-unsub', null, null, 'search-unsub', null, null, 'unsub-count'); }

        function exportTableToCSV(tableId, filename) {
            const state = paginationState[tableId]; if (!state || state.rows.length === 0) return showToast("No data to export");
            let csv = []; const table = document.getElementById(tableId);
            csv.push(Array.from(table.querySelectorAll("thead th")).map(th => '"' + th.innerText.replace(/ [↑↓↕]/g, '') + '"').join(","));
            state.rows.forEach(row => { let rowData = []; for (let j = 0; j < row.cells.length; j++) rowData.push('"' + row.cells[j].innerText.replace(/"/g, '""') + '"') ; csv.push(rowData.join(",")); });
            const link = document.createElement("a"); link.download = filename; link.href = window.URL.createObjectURL(new Blob([csv.join(String.fromCharCode(10))], {type: "text/csv"})); document.body.appendChild(link); link.click(); document.body.removeChild(link);
        }

        function exportEmailsToTXT(tableId, filename) {
            const state = paginationState[tableId]; if (!state || state.rows.length === 0) return showToast("No data to export");
            const uniqueEmails = new Set();
            state.rows.forEach(row => { const email = row.getAttribute('data-email'); if (email && email.trim() !== '' && email !== 'Anonymous') uniqueEmails.add(email.trim()); });
            if (uniqueEmails.size === 0) return showToast("No valid emails found in current filter.");
            const link = document.createElement("a"); link.download = filename; link.href = window.URL.createObjectURL(new Blob([Array.from(uniqueEmails).join('\\n')], {type: "text/plain"})); document.body.appendChild(link); link.click(); document.body.removeChild(link);
        }

        const sortStates = {};
        function sortTable(tableId, colIndex) {
            const table = document.getElementById(tableId); const tbody = table.querySelector("tbody");
            const rows = Array.from(tbody.querySelectorAll("tr")).filter(r => r.cells.length > 1);
            const sortKey = tableId + '_' + colIndex; sortStates[sortKey] = sortStates[sortKey] === undefined ? false : !sortStates[sortKey];
            const sortAsc = sortStates[sortKey];

            table.querySelectorAll("th").forEach((th, i) => { const text = th.innerText.replace(/ [↑↓↕]/g, ''); th.innerText = text + (i === colIndex ? (sortAsc ? " ↑" : " ↓") : " ↕"); });

            rows.sort((a, b) => {
                let valA, valB;
                if (colIndex === 2) { valA = new Date(a.getAttribute("data-date")).getTime() || 0; valB = new Date(b.getAttribute("data-date")).getTime() || 0; } 
                else {
                    valA = a.cells[colIndex].innerText.trim(); valB = b.cells[colIndex].innerText.trim();
                    const numA = valA.replace(/,/g, ''), numB = valB.replace(/,/g, '');
                    if (!isNaN(numA) && !isNaN(numB) && numA !== '' && numB !== '') { valA = parseInt(numA, 10); valB = parseInt(numB, 10); } 
                    else { valA = valA.toLowerCase(); valB = valB.toLowerCase(); }
                }
                return valA < valB ? (sortAsc ? -1 : 1) : valA > valB ? (sortAsc ? 1 : -1) : 0;
            });
            rows.forEach(row => tbody.appendChild(row));
            
            if (tableId === 'all-clicks-table') applyFiltersAllClicks();
            else if (tableId === 'opens-table') applyFiltersOpens();
            else if (tableId === 'global-table') applyFiltersGlobal();
            else if (tableId === 'unsub-table') applyFiltersUnsubs();
        }
    </script>
</body>
</html>`;
}
