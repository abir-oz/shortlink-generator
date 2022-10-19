import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  ErrorMsg,
  FormWrapper,
  Input,
} from "../styled/mainStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ShortLinks from "./ShortLinks";

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
      <ShortLinks links={links} setLinks={setLinks} />
    </>
  );
}

export default ShortForm;
