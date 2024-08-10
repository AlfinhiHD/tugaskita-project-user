import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import TukarPoinDialog from "./tukar-poin-dialog";
import { Gift } from "lucide-react";

const RewardCard = ({ reward, userPoints, onExchange }) => {
  return (
    <Card className="bg-blue-800 border-none text-white hover:scale-105 transition-transform duration-200">
      <CardContent className="p-4">
        <div className="flex items-center mb-4">
          <Gift className="w-8 h-8 mr-4 flex-shrink-0" />
          <h3 className="font-semibold text-lg ">{reward.Name}</h3>
        </div>
        <img
          src={reward.Image}
          alt={reward.Name}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <div className="flex justify-center my-8">
          <span className="bg-green-500 text-white px-6 py-2 rounded-full text-base">
            {reward.Price} poin
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <TukarPoinDialog
          reward={reward}
          userPoints={userPoints}
          onExchange={onExchange}
        />
      </CardFooter>
    </Card>
  );
};

export default RewardCard;
