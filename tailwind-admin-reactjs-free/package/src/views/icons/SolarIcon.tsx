import CardBox from "src/components/shared/CardBox";
import BreadcrumbComp from "src/layouts/full/shared/breadcrumb/BreadcrumbComp";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    href: '',
    text: 'Iconify Icons',
  },
]

const SolarIcon = () => {
  return (
    <>
      <BreadcrumbComp title="Solar Icons" items={BCrumb} />
      <CardBox>
        <iframe
          src="https://icon-sets.iconify.design/solar/"
          title="Inline Frame Example"
          width="100%"
          height="650"
        ></iframe>
      </CardBox>
    </>
  );
};

export default SolarIcon;
