"use client";

import { useState, useEffect, forwardRef } from "react";
import type { SVGProps } from "react";
import {
  getIcon,
  loadIcon,
  iconLoaded,
  buildIcon,
  replaceIDs,
} from "@iconify/react";
import type { IconifyIcon, IconProps } from "@iconify/react";

function sanitizeSVGBody(body: string): string {
  return body.replace(/<script[\s\S]*?<\/script>/gi, "");
}

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  function Icon(props, ref) {
    const { icon, ...rest } = props;
    const [data, setData] = useState<IconifyIcon | null | undefined>(undefined);

    useEffect(() => {
      if (typeof icon === "object") {
        setData(icon);
        return;
      }

      const loaded = getIcon(icon);
      if (loaded) {
        setData(loaded);
      } else if (!iconLoaded(icon)) {
        loadIcon(icon).then((result) => {
          setData(result);
        });
      } else {
        setData(null);
      }
    }, [icon]);

    if (!data) {
      return null;
    }

    const customisations: any = {};
    if (rest.width !== undefined) customisations.width = rest.width;
    if (rest.height !== undefined) customisations.height = rest.height;
    if (rest.rotate) customisations.rotate = rest.rotate;
    if (rest.flip) customisations.flip = rest.flip;
    if (rest.hFlip) customisations.hFlip = true;
    if (rest.vFlip) customisations.vFlip = true;
    if (rest.inline) customisations.inline = true;

    const result = buildIcon(data, customisations);
    const sanitizedBody = sanitizeSVGBody(result.body);

    const { width, height, ...svgRest } = rest;
    const svgProps: any = { ...result.attributes, ...svgRest };
    delete svgProps.icon;

    if (rest.inline) {
      svgProps.style = { ...svgProps.style, verticalAlign: "-0.125em" };
    }
    if (rest.color) {
      svgProps.style = { ...svgProps.style, color: rest.color };
    }

    svgProps.dangerouslySetInnerHTML = {
      __html: replaceIDs(sanitizedBody, rest.id ? () => rest.id + "ID" : "iconifyReact"),
    };

    return <svg {...svgProps} ref={ref} />;
  }
);
