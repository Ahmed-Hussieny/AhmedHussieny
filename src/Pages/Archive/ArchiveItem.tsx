import { ExComponentProps } from "../../Components/ExComponent/ExComponent";
import SmItem from "../../Components/ExComponent/SmItem";
const ArchiveItem = ({Data}:ExComponentProps) => {
    return (
        <tr className="border-bottom border-secondary ">
          <td className="py-4">
            <span className="text-secondary ">{Data.from}</span>
            </td>
          <td className="py-4">
            <a
              href="https://www.emersoncollective.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-light fw-bold text-decoration-none"
            >
              {Data.Project}
            </a>
          </td>
          <td className="d-none py-4 text-secondary d-lg-table-cell">
          <span className="text-secondary">{Data.company}</span></td>
          <td className="d-none py-4 d-lg-table-cell">
            <div className="d-flex flex-wrap gap-2">
              {Data.items.map((item) => {
                return <SmItem Text={item.name} />;
              })}
            </div>
          </td>
          <td className="d-none py-4 d-sm-table-cell">
            <a
              href="https://www.emersoncollective.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-secondary text-decoration-none"
            >
              {Data.link}
            </a>
          </td>
        </tr>
    )
}

export default ArchiveItem
