import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";
import PropTypes from "prop-types";

const TextInput = ({ extractKeywords }) => {
  const [text, setText] = useState('');

  const toast = useToast();

  const submitText = () => {
    if (text === "") {
      toast({
        title: "Text Field Empty",
        description: "Please enter some text to extract keywords from.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      extractKeywords(text);
      return;
    }
  };
  return (
    <>
      <Textarea
        bg="blue.400"
        color="white"
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        bg="blue.500"
        color="white"
        width={100}
        _hover={{ bg: "blue.700" }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

TextInput.propTypes = {
  extractKeywords: PropTypes.func.isRequired, // Define the type of extractKeywords prop
};

export default TextInput;
