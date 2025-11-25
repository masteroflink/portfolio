---
description: Add a new project to the portfolio
---

You will interactively guide the user through adding a new project to `src/data/projects.json`. Follow these steps carefully:

## Step 1: Gather Project Information

Ask the user for the following information ONE field at a time:

1. **Project Name**:
   - After receiving, read `src/data/projects.json` and check if a project with this name already exists
   - If duplicate found, inform the user and STOP (do not continue)
   - If unique, proceed

2. **GitHub URL**:
   - Must be a valid GitHub URL (must contain "github.com")
   - If not valid GitHub URL, inform user and ask again
   - Format: https://github.com/username/repo

3. **Image Filename**:
   - Accept either "filename.jpg" or "/filename.jpg" format
   - Normalize to "/filename.jpg" format (add leading slash if missing)
   - Check if the file exists in `public/` directory (e.g., `public/filename.jpg`)
   - If file doesn't exist, warn user and ask if they want to continue anyway or provide different filename

4. **Skills** (comma-separated):
   - Example: "Python, Django, PostgreSQL"
   - Parse into array format, trimming whitespace
   - Show the parsed array to user for confirmation

5. **Description**:
   - Accept multi-line or single-line description
   - No character limit

## Step 2: Show Preview

Display a formatted preview of all entered information:
```
Project Preview:
----------------
Name: [name]
URL: [url]
Image: [imgSrc]
Skills: [skill1, skill2, skill3]
Description: [description]
```

Ask user to confirm: "Does this look correct? (yes/no)"
- If no: ask which field to change and re-prompt for that field, then show preview again
- If yes: proceed to Step 3

## Step 3: Save to JSON

1. Read the current `src/data/projects.json` file
2. Parse the JSON array
3. Add the new project object to the **beginning** of the array (index 0)
4. Write the updated JSON back to the file with proper formatting (2-space indentation)

The project object format:
```json
{
  "name": "Project Name",
  "url": "https://github.com/username/repo",
  "imgSrc": "/image.jpg",
  "skills": ["Skill1", "Skill2"],
  "description": "Description text..."
}
```

## Step 4: Test Build

1. Run `npm run build` to verify the changes don't break the build
2. Monitor the build output

**If build succeeds**:
- Inform user: "✓ Project added successfully and build passed!"
- Remind user that changes are not committed (they can commit manually)

**If build fails**:
- Show the error
- Ask user: "The build failed. Would you like to revert the changes to projects.json? (yes/no)"
  - If yes: restore the original projects.json content and confirm reversion
  - If no: keep the changes and inform user they'll need to fix the issue

## Important Notes:
- Do NOT commit changes to git
- Always add new projects to the BEGINNING of the array
- Validate GitHub URLs (must contain "github.com")
- Check for duplicate project names BEFORE gathering other information
- Normalize image paths to start with "/"
