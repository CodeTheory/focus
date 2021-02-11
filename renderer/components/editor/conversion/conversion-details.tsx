import {UseConversionState} from 'hooks/editor/use-conversion';

const ConversionDetails = ({conversion}: {conversion: UseConversionState}) => {
  const message = conversion?.message ?? "Loading…";
  const title = conversion?.title;
  const description = conversion?.description;
  const size = conversion?.size;

  return (
    <div className="conversion-details">
      <div className="message">{message}</div>
      <div className="details">
        <div className="left">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div className="size">{size}</div>
      </div>
      <style jsx>{`
        .conversion-details {
          display: flex;
          height: fit-content;
          width: 100%;
          padding: 24px;
          flex-direction: column;
          color: var(--title-color);
          flex-shrink: 0;
          line-height: 16px;
        }

        .message {
          padding-bottom: 24px;
          border-bottom: 1px solid #404040;
          color: #aaaaaa;
          font-size: 14px;
        }

        .details {
          padding-top: 24px;
          display: flex;
          line-height: 20px;
        }

        .left {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .title {
          font-weight: 500;
          font-size: 14px;
        }

        .description {
          color: #aaaaaa;
          font-size: 12px;
        }

        .size {
          font-size: 14px;
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

export default ConversionDetails;
