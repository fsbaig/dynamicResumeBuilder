document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
    const resumeViewer = document.getElementById('resume-viewer') as HTMLIFrameElement;
    const downloadButton = document.getElementById('download-button') as HTMLButtonElement;
    const shareButton = document.getElementById('share-button') as HTMLButtonElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload

        // Get input values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const address = (document.getElementById('address') as HTMLInputElement).value;
        const photo = (document.getElementById('photo') as HTMLInputElement).value;
        const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;

        // Inline CSS styles
        const cssStyles = `
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f4f4f9;
            }
            .resume-container {
                max-width: 800px;
                margin: 20px auto;
                padding: 30px;
                background-color: #ffffff;
                border-radius: 15px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                line-height: 1.6;
            }
            .resume-header {
                text-align: center;
                margin-bottom: 30px;
            }
            .resume-photo {
                width: 150px;
                height: 150px;
                border-radius: 50%;
                border: 5px solid #007BFF;
                box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
                object-fit: cover;
                margin: 0 auto 20px;
                transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
            }
            .resume-photo:hover {
                transform: scale(1.1);
                box-shadow: 0 8px 16px rgba(0, 123, 255, 0.3);
                border-color: #0056b3;
            }
            .resume-header h1 {
                color: #007BFF;
                margin: 0;
                font-size: 2.5em;
            }
            .resume-header p {
                color: #333;
                margin: 5px 0;
                font-size: 1.1em;
            }
            .resume-summary, .resume-skills, .resume-experience, .resume-education, .resume-projects {
                margin-bottom: 20px;
            }
            .resume-summary, .resume-skills, .resume-experience, .resume-education, .resume-projects {
                background-color: #f9f9f9;
                border-radius: 10px;
                padding: 15px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            .resume-summary h2, .resume-skills h2, .resume-experience h2, .resume-education h2, .resume-projects h2 {
                color: #007BFF;
                border-bottom: 2px solid #007BFF;
                padding-bottom: 5px;
                margin-bottom: 10px;
                font-size: 1.5em;
            }
            .resume-skills ul, .resume-projects ul {
                list-style: none;
                padding: 0;
            }
            .resume-skills li, .resume-projects li {
                background-color: #ffffff;
                padding: 10px;
                border-radius: 5px;
                margin-bottom: 5px;
                border-left: 5px solid #007BFF;
                transition: background-color 0.3s ease, color 0.3s ease;
            }
            .resume-skills li:hover, .resume-projects li:hover {
                background-color: #007BFF;
                color: #ffffff;
            }
        `;

        // Resume HTML content
        const resumeHTML = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${name}'s Resume</title>
                <style>${cssStyles}</style>
            </head>
            <body>
                <div class="resume-container">
                    <div class="resume-header">
                        <img src="${photo}" alt="${name}" class="resume-photo">
                        <h1>${name}</h1>
                        <p>Email: ${email}</p>
                        <p>Phone: ${phone}</p>
                        <p>Address: ${address}</p>
                    </div>
                    <div class="resume-summary">
                        <h2>Summary</h2>
                        <p>${summary}</p>
                    </div>
                    <div class="resume-skills">
                        <h2>Skills</h2>
                        <ul>${skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
                    </div>
                    <div class="resume-experience">
                        <h2>Experience</h2>
                        <p>${experience}</p>
                    </div>
                    <div class="resume-education">
                        <h2>Education</h2>
                        <p>${education}</p>
                    </div>
                    <div class="resume-projects">
                        <h2>Projects</h2>
                        <ul>${projects.split('\n').map(project => `<li>${project}</li>`).join('')}</ul>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Create a Blob and a link to view the resume
        const resumeURL = URL.createObjectURL(new Blob([resumeHTML], { type: 'text/html' }));
        resumeViewer.src = resumeURL;
        resumeOutput.style.display = 'block';

        // Enable download button
        downloadButton.style.display = 'block';
        downloadButton.addEventListener('click', () => {
            const link = document.createElement('a');
            link.href = resumeURL;
            link.download = `${name}_Resume.html`;
            link.click();
        });

        // Enable share button
        shareButton.style.display = 'block';
        shareButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(resumeURL);
                alert('Resume URL copied to clipboard!');
            } catch (error) {
                console.error('Failed to copy URL:', error);
            }
        });
    });
});
