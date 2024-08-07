import { useQuery, useQueryClient } from "@tanstack/react-query";
import { moneyMentorApi } from "../api/apiMoneyMentorAxios";

export const useSubTopicQuery = () => {
  const queryClient = useQueryClient();

  const getSubTopics = async () => {
    moneyMentorApi.get("/businessSubTopic");
  };

  const subTopicQuery = useQuery({
    queryKey: ["todos"],
    queryFn: getSubTopics,
  });

  return {
    subTopicQuery,
  };
};
