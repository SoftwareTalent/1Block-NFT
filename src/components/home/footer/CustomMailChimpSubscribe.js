import MailchimpSubscribe from "react-mailchimp-subscribe";
import EmailInput from "./EmailInput";

function CustomMailchimpSubscribe({ color }) {
  const postUrl = `https://gmail.us20.list-manage.com/subscribe/post?u=98153c4261d7893be2afff3c8&id=e005565386`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <EmailInput
          status={status}
          message={message}
          color={color}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}

export default CustomMailchimpSubscribe;
