import MailchimpSubscribe from "react-mailchimp-subscribe";
import EmailInput from "./EmailInput";

function CustomMailchimpSubscribe() {
  const postUrl = `https://gmail.us20.list-manage.com/subscribe/post?u=98153c4261d7893be2afff3c8&id=e005565386`;

  return (
    <MailchimpSubscribe
      url={postUrl}
      render={({ subscribe, status, message }) => (
        <EmailInput
          status={status}
          message={message}
          onValidated={(formData) => subscribe(formData)}
        />
      )}
    />
  );
}

export default CustomMailchimpSubscribe;
