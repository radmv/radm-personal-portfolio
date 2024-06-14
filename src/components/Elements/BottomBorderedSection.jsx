const BottomBorderedSection = (props) => {
  const { children, addClassname } = props;

  return (
    <div className={`pb-4 border-b border-neutral-900 ${addClassname}`}>
      {children}
    </div>
  );
};

export default BottomBorderedSection;
