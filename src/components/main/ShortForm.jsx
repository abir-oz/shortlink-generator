import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";
import { formVar } from "../framer";
import {
  Button,
  Form,
  ErrorMsg,
  FormWrapper,
  Input,
  PreviousLinks,
  LinksWrapper,
} from "../styled/mainStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Item from "./Item";

function ShortForm() {
  let currentLinks = JSON.parse(localStorage.getItem("links")) || [];
  const [links, setLinks] = useState(currentLinks);

  const onSubmit = (data) => {
    fetch("https://api.shrtco.de/v2/shorten?url=" + data.url)
      .then((response) => response.json())
      .then((data) => {
        let newLinks = [...links, data.result];
        setLinks(newLinks);
        localStorage.setItem("links", JSON.stringify(newLinks));
      });
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const schema = yup
    .object({
      url: yup.string().url().required("Please add a link"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)} id="linkForm">
          <Input
            error={errors.url?.message}
            {...register("url")}
            placeholder="Shorten a link here..."
          />
          <Button type="submit">Shorten it!</Button>
          <ErrorMsg>{errors.url?.message}</ErrorMsg>
        </Form>
      </FormWrapper>
      <PreviousLinks>
        <LinksWrapper>
          {links.map((link, index) => (
            <Item link={link} key={index} />
          ))}
        </LinksWrapper>
      </PreviousLinks>
    </>
  );
}

export default ShortForm;
