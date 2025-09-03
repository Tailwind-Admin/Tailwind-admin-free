
import TableComp from "src/components/utilities/table";
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Table",
  },
];
const Notes = () => {

  return (
    <>

      <BreadcrumbComp title="Table" items={BCrumb} />
      <TableComp />
    </>
  );
};

export default Notes;
