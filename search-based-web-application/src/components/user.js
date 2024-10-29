import { BellRing, Check, Image } from "lucide-react";
import user from "../assets/user.svg";
import location from "../assets/location.svg";
import call from "../assets/call.svg";

import { cn } from ".././lib/utils";
import { Button } from "./atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./atoms/card";
import { UserDetails } from "./UserDetail";

function User({ data }) {
  return (
    <Card
      className={cn("w-full max-w-md p-2 md:p-2 bg-white shadow-lg rounded-lg")}
    >
      <CardHeader className="flex flex-col">
        <CardTitle>
          <img
            src={user}
            alt="User Icon"
            className="h-16 w-16 rounded-full border-2 border-gray-300"
          />
          <p className="pt-4">
            {data?.first_name} {data?.last_name}
          </p>
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-2 text-gray-800 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <img
            src={location}
            alt="Location Icon"
            className="h-5 w-5 text-gray-500"
          />
          <span className="text-sm">{data?.city}</span>
        </div>
      </CardContent>

      <CardFooter className="mt-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          <div className="flex gap-2">
            <img src={call} alt="Call Icon" className="h-5 w-5 text-gray-400" />
            <p>{data?.contact_number}</p>
          </div>

          <div className="text-sm">
            <p className="text-xs text-gray-500">Available on phone</p>
          </div>
        </div>
        <UserDetails />
      </CardFooter>
    </Card>
  );
}

export default User;
