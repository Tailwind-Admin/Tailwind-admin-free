
import NotesApp from "src/components/apps/notes";
import BreadcrumbComp from 'src/layouts/full/shared/breadcrumb/BreadcrumbComp';



const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Notes",
  },
];
const Notes = () => {

  return (
    <>

      <BreadcrumbComp title="Notes app" items={BCrumb} />
      <NotesApp />
    </>
  );
};

export default Notes;
