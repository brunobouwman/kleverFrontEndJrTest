import Form from "../../components/form/form";
import MainHeader from "../../components/mainHeader/mainHeader";


function AddTokenPage() {

  console.log(document.querySelector('.waterMark'));

  return (
    <div>
      <MainHeader type="Add Token" />
    <Form type={"add"} />
</div>
  );
}

export default AddTokenPage;
