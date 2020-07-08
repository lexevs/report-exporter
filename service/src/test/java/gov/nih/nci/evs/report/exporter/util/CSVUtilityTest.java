package gov.nih.nci.evs.report.exporter.util;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import gov.nih.nci.evs.report.exporter.model.ChildEntity;
import gov.nih.nci.evs.report.exporter.model.Definition;
import gov.nih.nci.evs.report.exporter.model.Property;
import gov.nih.nci.evs.report.exporter.model.RestEntity;
import gov.nih.nci.evs.report.exporter.model.Synonym;
import gov.nih.nci.evs.report.exporter.model.TypeListAndPositionTuple;
import gov.nih.nci.evs.report.exporter.service.BranchResolutionService;

class CSVUtilityTest {
	
	CSVUtility util;
	
	String csvOutLine1 = "code,name,terminology,parent,synonyms,definitions,PropType,PropType2,Prop0Type,Prop0Type2,Prop9Type,Prop9Type2";
	String csvOutLine2a = "C123234,Myent,ncit,null,";
	String csvOutLine2b	= "|NCIt CDISC mytermgr:synName ";
	String csvOutLine2c	=  "|synSource2 NCI atermgrp:synName2 |\"";
	String csvOutLine2d	= ",\"|NCI:defvalue|NOSOURCE:defvalue2|\",";
	String csvOutLine2e = "\"|PropType:propvalue|PropType:propvalue1|\",\"|PropType2:propvalue2|\"";
	String csvOutLine3 = "C000000,0ent,ncit,null,,,,,\"|Prop0Type:prop0value|\",\"|Prop0Type2:prop0value2|\"";
	String csvOutline4 = "C999999,My9,ncit,null,,,,,,,\"|Prop9Type:prop9value|\",\"|Prop9Type2:prop9value2|\"";
	BranchResolutionService service;

	@BeforeEach
	void setUp() throws Exception {
		service = new BranchResolutionService();
		util = new CSVUtility();
	}
	
	@Test
	void testSynonymOutput() {
		Synonym syn = new Synonym();
		syn.setType("synType");
		syn.setName("synName");
		syn.setSource("NCIt");
		syn.setSubSource("CDISC");
		syn.setTermGroup("mytermgr");
		System.out.println(syn.toString());	
		assertEquals("NCIt CDISC mytermgr:synName ",syn.toString());
	}
	
	@Test
	void testDefinitionOutput() {
		Definition def = new Definition();
		def.setType("defType");
		def.setDefinition("defvalue");
		def.setSource("NCI");
		System.out.println(def.toString());
		assertEquals("NCI:defvalue", def.toString());
	}
	
	@Test
	void testPropertyOutput() {
		Property prop = new Property();
		prop.setType("PropType");
		prop.setValue("propvalue");
		System.out.println(prop.toString());
		assertEquals("PropType:propvalue", prop.toString());
	}

	@Test
	void testProduceCSVOutputFromListWithHeading() {
		String csv = util.produceCSVOutputFromListWithHeading(getRestEntityList());
		String[] csvLines = csv.split(System.lineSeparator());
		assertTrue(csvLines[0].contains(csvOutLine1));
		assertTrue(csvLines[1].contains(csvOutLine2a));
		assertTrue(csvLines[1].contains(csvOutLine2b));
		assertTrue(csvLines[1].contains(csvOutLine2c));
		assertTrue(csvLines[1].contains(csvOutLine2d));
		assertTrue(csvLines[1].contains(csvOutLine2e));
		assertTrue(csvLines[2].contains(csvOutLine3));
		assertTrue(csvLines[3].contains(csvOutline4));
	}
	
	private List<RestEntity> getRestEntityList() {
		List<RestEntity> list = new ArrayList<RestEntity>();
		
		RestEntity ent = new RestEntity();
		ent.setCode("C123234");
		ent.setName("Myent");
		ent.setTerminology("ncit");
		
		List<Synonym> syns = new ArrayList<Synonym>();
		Synonym syn = new Synonym();
		syn.setType("synType");
		syn.setName("synName");
		syn.setSource("NCIt");
		syn.setSubSource("CDISC");
		syn.setTermGroup("mytermgr");
		Synonym syn2 = new Synonym();
		syn2.setSource("synSource2");
		syn2.setSubSource("NCI");
		syn2.setTermGroup("atermgrp");
		syn2.setName("synName2");
		syns.add(syn);
		syns.add(syn2);
		ent.setSynonyms(syns);
		
		List<Definition> defs = new ArrayList<Definition>();
		Definition def = new Definition();
		def.setType("defType");
		def.setDefinition("defvalue");
		def.setSource("NCI");
		Definition def2 = new Definition();
		def2.setType("defType2");
		def2.setDefinition("defvalue2");
		defs.add(def);
		defs.add(def2);
		ent.setDefinitions(defs);
		
		List<Property> props = new ArrayList<Property>();
		Property prop = new Property();
		prop.setType("PropType");
		prop.setValue("propvalue");
		Property propa = new Property();
		propa.setType("PropType");
		propa.setValue("propvalue1");
		Property prop2 = new Property();
		prop2.setType("PropType2");
		prop2.setValue("propvalue2");
		props.add(prop);
		props.add(propa);
		props.add(prop2);
		ent.setProperties(props);
		
		RestEntity ent1 = new RestEntity();
		ent1.setCode("C000000");
		ent1.setName("0ent");
		ent1.setTerminology("ncit");
		List<Property> props1 = new ArrayList<Property>();
		Property prop1 = new Property();
		prop1.setType("Prop0Type");
		prop1.setValue("prop0value");
		Property prop0 = new Property();
		prop0.setType("Prop0Type2");
		prop0.setValue("prop0value2");
		props1.add(prop1);
		props1.add(prop0);
		ent1.setProperties(props1);
		
		RestEntity ent9 = new RestEntity();
		ent9.setCode("C999999");
		ent9.setName("My9");
		ent9.setTerminology("ncit");
		List<Property> props9 = new ArrayList<Property>();
		Property prop9 = new Property();
		prop9.setType("Prop9Type");
		prop9.setValue("prop9value");
		Property prop29 = new Property();
		prop29.setType("Prop9Type2");
		prop29.setValue("prop9value2");
		props9.add(prop9);
		props9.add(prop29);
		ent9.setProperties(props9);

		list.add(ent);
		list.add(ent1);
		list.add(ent9);
		return list;
	}

//	@Test
//	void testProduceChildCSVOutputFromListWithHeading() {
//		assertEquals(getChildCSVRestEntityOutput(), util.produceChildCSVOutputFromListWithHeading(getChildEntityList()));
//	}
	
	private List<ChildEntity> getChildEntityList() {
		ChildEntity entity = new ChildEntity();
		List<ChildEntity> list = new ArrayList<ChildEntity>();
		List<ChildEntity> children = new ArrayList<ChildEntity>();
		List<ChildEntity> grandChildren = new ArrayList<ChildEntity>();
		List<ChildEntity> grandChildren2 = new ArrayList<ChildEntity>();

		ChildEntity child1 = new ChildEntity();
		child1.setCode("C00001");
		child1.setName("child1");
		child1.setLeaf(false);
		child1.setLevel("1");
		child1.setChildren(grandChildren);
		ChildEntity child2 = new ChildEntity();
		child2.setCode("C00002");
		child2.setName("child2");
		child2.setLeaf(true);
		child2.setLevel("1");
		ChildEntity child3 = new ChildEntity();
		child3.setCode("C00003");
		child3.setName("child3");
		child3.setLeaf(false);
		child3.setLevel("1");
		child3.setChildren(grandChildren2);
		ChildEntity grandchild1 = new ChildEntity();
		grandchild1.setCode("C00011");
		grandchild1.setName("grandchild1");
		grandchild1.setLeaf(true);
		grandchild1.setLevel("2");
		ChildEntity grandchild2 = new ChildEntity();
		grandchild2.setCode("C00012");
		grandchild2.setName("grandchild2");
		grandchild2.setLeaf(true);
		grandchild2.setLevel("2");
		ChildEntity grandchild3 = new ChildEntity();
		grandchild3.setCode("C00021");
		grandchild3.setName("grandchild3");
		grandchild3.setLeaf(true);
		grandchild3.setLevel("2");
		
		grandChildren.add(grandchild1);
		grandChildren.add(grandchild2);
		
		grandChildren2.add(grandchild3);
		
		children.add(child1);
		children.add(child2);
		children.add(child3);
		
		entity.setCode("C00000");
		entity.setName("parent");
		entity.setLeaf(false);
		entity.setLevel("0");
		entity.setChildren(children);
		service.resolveChildEntityGraph(CommonServices.TOP_NODE,entity, list);
		return list;
	}
	
	@Test
	public void TestIterateOnPosition() {
		ConcurrentMap<String, TypeListAndPositionTuple > map = new ConcurrentHashMap<String, TypeListAndPositionTuple>();
		List<Property> props9 = new ArrayList<Property>();
		Property prop9 = new Property();
		prop9.setType("Prop9Type");
		prop9.setValue("prop9value");
		Property prop29 = new Property();
		prop29.setType("Prop9Type");
		prop29.setValue("prop9value2");
		props9.add(prop9);
		props9.add(prop29);
		TypeListAndPositionTuple tuple = new TypeListAndPositionTuple(1, "Prop9Type", props9);
		
		List<Property> props = new ArrayList<Property>();
		Property prop = new Property();
		prop.setType("PropType");
		prop.setValue("propvalue");
		Property prop2 = new Property();
		prop2.setType("PropType");
		prop2.setValue("propvalue2");
		props.add(prop);
		props.add(prop2);
		TypeListAndPositionTuple tuple2 = new TypeListAndPositionTuple(2,"PropType", props);
		
		List<Property> props2 = new ArrayList<Property>();
		Property prop4 = new Property();
		prop4.setType("PropType2");
		prop4.setValue("propvalue2");
		Property prop3 = new Property();
		prop3.setType("PropType2");
		prop3.setValue("propvalue3");
		props.add(prop4);
		props.add(prop3);
		TypeListAndPositionTuple tuple3 = new TypeListAndPositionTuple(0,"PropType2", props2);
		
		map.put("Prop9Type", tuple);
		map.put("PropType", tuple2);
		map.put("PropType2", tuple3);
		
		CommonServices services = new CommonServices();
		Iterator<TypeListAndPositionTuple> itr = services.iterateOnPostion(map);
		while(itr.hasNext()) {System.out.println(itr.next().getPos());}
		
	}
	
	private String getCSVRestEntityOutput() {
		return "code,name,terminology,parent,synonyms,definitions,properties" +
				"\r\nC123234,Myent,ncit,null,\"|NCIt synType:synName|NOSOURCE synType2:synName2|\",\"|NCI defType:defvalue|NOSOURCE defType2:defvalue2|\",\"|PropType:propvalue|PropType2:propvalue2|\"" +
				"\r\nC000000,0ent,ncit,null,null,null,\"|Prop0Type:prop0value|Prop0Type2:prop0value2|\"" +
				"\r\nC999999,My9,ncit,null,null,null,\"|Prop9Type:prop9value|Prop9Type2:prop9value2|\"";	    
	}
	
	private String getChildCSVRestEntityOutput() {
		return "code,name,level,parent,leaf,children" +
				"\r\nC00011,grandchild1,2,C00001:child1,true,null" +
				"\r\nC00012,grandchild2,2,C00001:child1,true,null" +
				"\r\nC00001,child1,1,C00000:parent,false,null" +
				"\r\nC00002,child2,1,C00000:parent,true,null" +
				"\r\nC00021,grandchild3,2,C00003:child3,true,null" +
				"\r\nC00003,child3,1,C00000:parent,false,null" +
				"\r\nC00000,parent,0," + CommonServices.TOP_NODE + ",false,null";
	}
	
	

}
