import { useRouter } from "next/router";
import DetailsLayout from "../../../Components/DetailsLayout";

function Part() {
  const router = useRouter();
  const { PartId } = router.query;
  return <DetailsLayout> {PartId}</DetailsLayout>;
}

export default Part;
