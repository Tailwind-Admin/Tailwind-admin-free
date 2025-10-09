import React from "react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const metadata: Metadata = {
  title: "Iconify Tabler Icons",
};

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Iconify Icons",
  },
];
const page = () => {
  return (
    <>
      <BreadcrumbComp title="Iconify Icons" items={BCrumb} />
      <Card className='flex flex-col gap-3'>
        <div className='space-y-2'>
          <h6>⚙️ Installation</h6>
          <p>
            To use Tabler icons in your project, install the official React
            package:
          </p>
          <SyntaxHighlighter language='typescript' style={docco}>
            {` npm i @iconify-icon/react `}
          </SyntaxHighlighter>
        </div>
        <div className='space-y-2'>
          <h6>🧩 Usage Example</h6>
          <p>Import and use any icon in your components:</p>
          <SyntaxHighlighter language='typescript' style={docco}>
            {`import { Icon } from '@iconify/react';
function MyComponent() {
  return <Icon icon='solar:arrow-right-linear' width='20' height='20' />;
}`}
          </SyntaxHighlighter>
        </div>
        <div className='space-y-2'>
          <h6>🔍 Explore Icons</h6>
          <iframe
            src='https://icon-sets.iconify.design/solar/'
            title='Inline Frame Example'
            width='100%'
            height='650'></iframe>
        </div>
      </Card>
    </>
  );
};

export default page;
