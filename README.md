# Scripts for generating content for DRL

First time setup run 'npm install'

## Prepare CSV

Update resourceIDs (check what the last resource id is in digital-resource-library/app/data/resources.js

Save as DRLContentSheetCSV.csv

Update resourceIDs

—

Open Terminal
cd drl-import/

$ node resourcegenerator.js > content.js

—

Open GitHub Desktop

Set repository to 'digital-resource-library' 

Make sure ‘current branch’ is Master.

Click ‘Fetch origin’ and then ‘pull origin’ if available.

(This makes sure your DRL directory is up-to-date with Master) 

—
Open content.js in ‘Atom’ / text editor

Open Github DRL directory as project in ‘Atom’ / change line (open digital-resource-library/app/data/resources.js in atom)

Create a few new lines at the end of /app/data/resources.js (before the ‘];’ line)

Put a comma at the end of the current last resource, after the curly bracket.

Copy text from content.js ignoring the square brackets at the beginning and end of the file.

Paste into the blank space near the end of resources.js

find/replace  '':'' with nothing.

Remove the blank lines.

Click ‘Packages’ -> ’Atom Beautify’ -> ‘Beautify’

(Save file, and thwn enCmd-Shift-p and then type ESLint Formatter in Sublime)

Check resources.js looks good and then save it.
—
Return to GitHub desktop. 

Changes should be visible on the left hand side.

Click ‘Current Branch’ and then ‘New’ and name the branch something like ‘contentupdateYYYYMMDD’

Fill in ‘Summary’ and ‘Description’ details and commit to the branch.

Click to publish the branch (‘push origin’).

Click ‘Branch’ -> ‘Create Pull Request’ (check)

This should open up the GitHub site.

Add reviewers on left hand (add a dev)

Click 'Create Pull Request'

Wait for tests to complete (could take 5 minutes).

If they fail click on 'details' to find the error, fix them, or ask a dev for help.

If they pass, send a comment to ask reviewer to check your update.

Check if resources look right in heroku (click 'view deployment')

Wait for thumbs up from reviewer.

Then 'squash and merge'.

—- (old)
Open project in IntelliJ
cmd+alt+l

-- (to do)
fixing white space errors
