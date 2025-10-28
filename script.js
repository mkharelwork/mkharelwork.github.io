document.addEventListener('DOMContentLoaded', function() {

    // --- PORTFOLIO DATA ---
    const projects = [
        {
            title: "AI-Driven SIEM Automation Project",
            imageUrl: "siem.png", // UPDATED FROM SCREENSHOT
            status: "Completed",
            objective: "Designed and implemented an automated Security Orchestration, Automation, and Response (SOAR) pipeline to reduce analyst response time for security incidents within a cloud-based SIEM environment.",
            actions: [
                "Deployed and configured the Elastic Stack (SIEM) on AWS EC2.",
                "Integrated Elastic Defend (EDR) on a Windows Server endpoint for real-time threat detection.",
                "Engineered an automated alert triage workflow using Tines and AI APIs (OpenAI/Anthropic).",
                "Authored custom detection rules for critical events like privileged account creation (Event ID 4672)."
            ],
            technologies: ["Elastic SIEM", "Tines", "AWS EC2", "PowerShell", "Elastic Defend", "OpenAI API", "Webhooks"]
        },
        {
            title: "Cloud-Based Cybersecurity Detection Lab",
            imageUrl: "detec.png", // UPDATED FROM SCREENSHOT
            status: "Completed",
            objective: "Architected a cloud-native cybersecurity lab in AWS to simulate attacker activities and build real-time detection and alerting capabilities.",
            actions: [
                "Configured AWS CloudTrail to log all API activity and established EventBridge rules to detect suspicious API calls.",
                "Implemented Amazon SNS to trigger automated email alerts upon detection of malicious activity.",
                "Utilized Kali Linux as an attacker machine to execute AWS CLI commands and validate detection logic."
            ],
            technologies: ["AWS CloudTrail", "Amazon SNS", "EventBridge", "AWS CLI", "Kali Linux"]
        },
        {
            title: "Open Source Intelligence (OSINT) Project",
            imageUrl: "osnit.png", // UPDATED FROM SCREENSHOT
            status: "Completed",
            objective: "Deployed and operated the SpiderFoot OSINT tool to automate the collection and analysis of publicly available data and identify potential security risks.",
            actions: [
                "Installed and configured SpiderFoot on Kali Linux to conduct automated scans against domains, emails, and IP addresses.",
                "Analyzed scan results to identify attack surfaces, data leakage, and potential vulnerabilities."
            ],
            technologies: ["SpiderFoot", "Kali Linux", "OSINT Frameworks"]
        },
        {
            title: "Self-Hosted OpenVPN Server Project",
            imageUrl: "vpn.png", // UPDATED FROM SCREENSHOT
            status: "In Progress",
            objective: "Built a secure, private VPN server to enhance online privacy and establish encrypted remote access to a home lab environment.",
            actions: [
                "Provisioned Kali Linux VMs for server and client roles in VMware.",
                "Installed and configured OpenVPN and Easy-RSA to establish a Public Key Infrastructure (PKI).",
                "Generated all necessary cryptographic materials and configured kernel IP forwarding and iptables rules for NAT."
            ],
            technologies: ["OpenVPN", "Easy-RSA", "iptables", "NAT", "VMware", "Kali Linux"]
        },
        {
            title: "AI Agent Integration with MCP Server",
            imageUrl: "mcp.png", // UPDATED FROM SCREENSHOT
            status: "In Progress",
            objective: "Built a custom Model Context Protocol (MCP) server in Python to enable dynamic tool-based interactions between AI models and external APIs.",
            actions: [
                "Developed a tool to fetch real-time weather data using the OpenWeatherMap API.",
                "Connected the MCP server to Claude Desktop, allowing the AI agent to autonomously call APIs.",
                "Integrated a Google Sheets MCP server to automate spreadsheet creation and updates in Google Drive.",
                "Designed a workflow where the AI could combine multiple tools to fetch and compile data automatically."
            ],
            technologies: ["Python", "MCP SDK", "OpenWeather API", "Google Cloud", "Claude Desktop"]
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    if (projectsContainer) {
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            
            let cardContent = `
                <img src="${project.imageUrl}" alt="${project.title}">
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p class="status">${project.status}</p>
                    <p><strong>Objective:</strong> ${project.objective}</p>
                    <h4>Key Actions</h4>
                    <ul>
            `;
            
            project.actions.forEach(action => {
                cardContent += `<li>${action}</li>`;
            });

            cardContent += `
                    </ul>
                    <div class="tech-tags">
            `;

            project.technologies.forEach(tech => {
                cardContent += `<span class="tech-tag">${tech}</span>`;
            });

            cardContent += `
                    </div>
                </div>
            `;

            card.innerHTML = cardContent;
            projectsContainer.appendChild(card);
        });
    }
});
