# Scripts for generating content for DRL

Prepare CSV

Save as DRLContentSheetCSV.csv

Update resourceIDs

—

Open Terminal
cd nodestuff/
$ node resourcegenerator.js > content.js

—

Open GitHub Desktop

Make sure ‘current branch’ is Master.

Click ‘Fetch origin’ and then ‘pull origin’ if available.

(This makes sure your DRL directory is up-to-date with Master) 

—
Open content.js in ‘Atom’

Open Github DRL directory as project in ‘Atom’

Create a few new lines at the end of /app/data/resources.js (before the ‘];’ line)

Put a comma at the end of the current last resource, after the curly bracket.

Copy text from content.js ignoring the square brackets at the beginning and end of the file.

Paste into the blank space near the end of resources.js

Remove the blank lines.

Click ‘Packages’ -> ’Atom Beautify’ -> ‘Beautify’

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
—


Go through rest with Lucy.


—
Add notes to Confluence on full process (including opening projects in atom, using pull/fetch/github etc.)


Beautify
Remove blank property in sector




— (old)
Open project in IntelliJ
cmd+alt+l

