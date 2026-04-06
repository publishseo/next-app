# create-component

Generates a standardized React component folder and file structure for this Next.js project.

## Usage
/create-component <component-name>

## Arguments
- `component-name`: The name of the component (can be space-separated or kebab-case).

## Behavior
1.  **Format Name**: Convert `<component-name>` to **PascalCase** for the folder and filename.
2.  **Pathing**: 
    - Create a directory at: `components/[PascalName]/`
    - Create a file at: `components/[PascalName]/[PascalName].jsx`
3.  **Boilerplate Generation**: Populate the `.jsx` file with the following template:

```jsx
import React from 'react';

const [PascalName] = () => {
  return (
    <div className="[kebab-name]">
      {/* Create layout code */}
    </div>
  );
};

export default [PascalName];

4. Create layout code and replace placeholder for code.