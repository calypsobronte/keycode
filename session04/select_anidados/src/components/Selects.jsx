import React, { useState, useEffect } from 'react';
import { SelectList } from './SelectList';

const estados = ["Cundinamarca", "Antioquia", "Caldas"];
const municipios = {
  Cundinamarca: ["Bogotá", "Soacha"],
  Antioquia: ["Medellín", "Envigado"],
  Caldas: ["Manizales", "Villamaría"]
};
const ciudades = {
  Bogotá: ["Usaquén", "La Candelaria"],
  Medellín: ["El Poblado", "Laureles"],
  Manizales: ["Centro", "Altagracia"]
};

export const Selects = () => {
  const [selectedEstado, setSelectedEstado] = useState('');
  const [selectedMunicipio, setSelectedMunicipio] = useState('');
  const [selectedCiudad, setSelectedCiudad] = useState('');

  const [municipioOptions, setMunicipioOptions] = useState([]);
  const [ciudadOptions, setCiudadOptions] = useState([]);

  useEffect(() => {
    if (selectedEstado) {
      setMunicipioOptions(municipios[selectedEstado] || []);
    } else {
      setMunicipioOptions([]);
      setCiudadOptions([]);
    }
    setSelectedMunicipio('');
    setSelectedCiudad('');
  }, [selectedEstado]);

  useEffect(() => {
    if (selectedMunicipio) {
      setCiudadOptions(ciudades[selectedMunicipio] || []);
    } else {
      setCiudadOptions([]);
    }
    setSelectedCiudad('');
  }, [selectedMunicipio]);

  return (
    <>
      <SelectList
        title="Estado"
        options={estados}
        value={selectedEstado}
        onChange={(e) => setSelectedEstado(e.target.value)}
      />
      <SelectList
        title="Municipio"
        options={municipioOptions}
        value={selectedMunicipio}
        onChange={(e) => setSelectedMunicipio(e.target.value)}
      />
      <SelectList
        title="Ciudad"
        options={ciudadOptions}
        value={selectedCiudad}
        onChange={(e) => setSelectedCiudad(e.target.value)}
      />
    </>
  );
};
