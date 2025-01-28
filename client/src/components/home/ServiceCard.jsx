import React from "react";
import Card from "./Card";

function ServiceCard() {
  return (
    <div className="container mx-auto max-md:px-4 flex flex-col justify-center">
      <h1 className="text-4xl text-center py-4 pb-6">
        Let's Craft Your Herioc <br />
        Content <span className="gradient-text">✦ Together</span>
      </h1>
      <div className="grid w-full grid-cols-3 py-8 gap-4 max-md:grid-cols-1">
        <Card
          icon={"/home/icons/kanban.svg"}
          title={"IT Consultation"}
          content={
            "Providing expert IT consulting services to streamline your operations, enhance infrastructure, and implement innovative solutions tailored to your business goals."
          }
        />
        <Card
          icon={"/home/icons/filled.svg"}
          title={"IT Consultation"}
          content={
            "Providing expert IT consulting services to streamline your operations, enhance infrastructure, and implement innovative solutions tailored to your business goals."
          }
        />
        <Card
          icon={"/home/icons/people.svg"}
          title={"IT Consultation"}
          content={
            "Providing expert IT consulting services to streamline your operations, enhance infrastructure, and implement innovative solutions tailored to your business goals."
          }
        />
      </div>
    </div>
  );
}

export default ServiceCard;
