var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    var resumeViewer = document.getElementById('resume-viewer');
    var downloadButton = document.getElementById('download-button');
    var shareButton = document.getElementById('share-button');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent page reload
        // Get input values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var photo = document.getElementById('photo').value;
        var summary = document.getElementById('summary').value;
        var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
        var experience = document.getElementById('experience').value;
        var education = document.getElementById('education').value;
        var projects = document.getElementById('projects').value;
        // Inline CSS styles
        var cssStyles = "\n            body {\n                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n                margin: 0;\n                padding: 20px;\n                background-color: #f4f4f9;\n            }\n            .resume-container {\n                max-width: 800px;\n                margin: 20px auto;\n                padding: 30px;\n                background-color: #ffffff;\n                border-radius: 15px;\n                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n                line-height: 1.6;\n            }\n            .resume-header {\n                text-align: center;\n                margin-bottom: 30px;\n            }\n            .resume-photo {\n                width: 150px;\n                height: 150px;\n                border-radius: 50%;\n                border: 5px solid #007BFF;\n                box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);\n                object-fit: cover;\n                margin: 0 auto 20px;\n                transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;\n            }\n            .resume-photo:hover {\n                transform: scale(1.1);\n                box-shadow: 0 8px 16px rgba(0, 123, 255, 0.3);\n                border-color: #0056b3;\n            }\n            .resume-header h1 {\n                color: #007BFF;\n                margin: 0;\n                font-size: 2.5em;\n            }\n            .resume-header p {\n                color: #333;\n                margin: 5px 0;\n                font-size: 1.1em;\n            }\n            .resume-summary, .resume-skills, .resume-experience, .resume-education, .resume-projects {\n                margin-bottom: 20px;\n            }\n            .resume-summary, .resume-skills, .resume-experience, .resume-education, .resume-projects {\n                background-color: #f9f9f9;\n                border-radius: 10px;\n                padding: 15px;\n                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n            }\n            .resume-summary h2, .resume-skills h2, .resume-experience h2, .resume-education h2, .resume-projects h2 {\n                color: #007BFF;\n                border-bottom: 2px solid #007BFF;\n                padding-bottom: 5px;\n                margin-bottom: 10px;\n                font-size: 1.5em;\n            }\n            .resume-skills ul, .resume-projects ul {\n                list-style: none;\n                padding: 0;\n            }\n            .resume-skills li, .resume-projects li {\n                background-color: #ffffff;\n                padding: 10px;\n                border-radius: 5px;\n                margin-bottom: 5px;\n                border-left: 5px solid #007BFF;\n                transition: background-color 0.3s ease, color 0.3s ease;\n            }\n            .resume-skills li:hover, .resume-projects li:hover {\n                background-color: #007BFF;\n                color: #ffffff;\n            }\n        ";
        // Resume HTML content
        var resumeHTML = "\n            <!DOCTYPE html>\n            <html lang=\"en\">\n            <head>\n                <meta charset=\"UTF-8\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                <title>".concat(name, "'s Resume</title>\n                <style>").concat(cssStyles, "</style>\n            </head>\n            <body>\n                <div class=\"resume-container\">\n                    <div class=\"resume-header\">\n                        <img src=\"").concat(photo, "\" alt=\"").concat(name, "\" class=\"resume-photo\">\n                        <h1>").concat(name, "</h1>\n                        <p>Email: ").concat(email, "</p>\n                        <p>Phone: ").concat(phone, "</p>\n                        <p>Address: ").concat(address, "</p>\n                    </div>\n                    <div class=\"resume-summary\">\n                        <h2>Summary</h2>\n                        <p>").concat(summary, "</p>\n                    </div>\n                    <div class=\"resume-skills\">\n                        <h2>Skills</h2>\n                        <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</ul>\n                    </div>\n                    <div class=\"resume-experience\">\n                        <h2>Experience</h2>\n                        <p>").concat(experience, "</p>\n                    </div>\n                    <div class=\"resume-education\">\n                        <h2>Education</h2>\n                        <p>").concat(education, "</p>\n                    </div>\n                    <div class=\"resume-projects\">\n                        <h2>Projects</h2>\n                        <ul>").concat(projects.split('\n').map(function (project) { return "<li>".concat(project, "</li>"); }).join(''), "</ul>\n                    </div>\n                </div>\n            </body>\n            </html>\n        ");
        // Create a Blob and a link to view the resume
        var resumeURL = URL.createObjectURL(new Blob([resumeHTML], { type: 'text/html' }));
        resumeViewer.src = resumeURL;
        resumeOutput.style.display = 'block';
        // Enable download button
        downloadButton.style.display = 'block';
        downloadButton.addEventListener('click', function () {
            var link = document.createElement('a');
            link.href = resumeURL;
            link.download = "".concat(name, "_Resume.html");
            link.click();
        });
        // Enable share button
        shareButton.style.display = 'block';
        shareButton.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, navigator.clipboard.writeText(resumeURL)];
                    case 1:
                        _a.sent();
                        alert('Resume URL copied to clipboard!');
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Failed to copy URL:', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    });
});
