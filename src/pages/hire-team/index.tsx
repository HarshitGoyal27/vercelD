import CustomButton from "@/components/atoms/button";

const HireTeam = () => {
  const handleButtonClick = () => {
    // Your button click logic here
    alert("BTN CLicked");
  };
  return (
    <>
      <div>This is team</div>
      <CustomButton
        label="Click me"
        onClick={handleButtonClick}
        disabled={false} // Set to true to disable the button
        buttonStyle={{ background: "blue", color: "white" }}
      />
    </>
  );
};

export default HireTeam;
